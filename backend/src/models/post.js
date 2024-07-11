import { DataTypes, Op } from '@sequelize/core';

import database from '../config/database.js';
import { findStaffById, maskStaffDetails } from '../models/staff.js';


const Post = database.define(
    'Post',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        post_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'Post',
        timestamps: false,
    },
);

/** add user into post details */
async function addUserDetailsToPost(post) {
    const user = await findStaffById(post.post_user_id);
    return {
        id: post.id,
        title: post.title,
        content: post.content,
        post_date: post.post_date,
        post_user: maskStaffDetails(user),
    }
}

/** return all posts */
async function getPosts() {
    const posts = await Post.findAll({order: [['post_date', 'DESC']]})
    return await Promise.all(posts.map(addUserDetailsToPost));
}

/** find a set of posts satisfying search predicate */
async function findPostsByText(text) {
    const posts = await Post.findAll({
        where: {
            [Op.or]: [
                { title: { [Op.like]: `%${text}%` } },
                { content: { [Op.like]: `%${text}%` } },
            ]
        },
        order: [['post_date', 'DESC']],
    });
    return await Promise.all(posts.map(addUserDetailsToPost));
}

/** insert a post */
async function insertPost(post) {
    const newPost = await Post.create({
        title: post.title,
        content: post.content,
        post_user_id: post.post_user_id,
    });
    return await addUserDetailsToPost(newPost);
}

export default Post;
export { getPosts, findPostsByText, insertPost };
