const db = require('./db.js').db;

const collectionName = 'post'

class Post {
    constructor(id, title, content, date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
    }
}

/** return all post */
async function all() {
    const post = await find({});
    return post;
}

/** find a set of post satisfying p */
async function find(p) {
    try {
        const collection = db.collection(collectionName);
        const cursor = collection.find(p);
        var post = [];
        while (await cursor.hasNext()) {
            const dbobj = await cursor.next();
            post.push(new Post(dbobj.id, dbobj.title, dbobj.content, dbobj.date));
        }
        return post;
    } catch(error) {
        console.error("database connection failed." + error);
        throw error;
    } 
}

/** insert a list of post */
async function insertMany( post ) {
    try {
        const collection = db.collection(collectionName);
        await collection.insertMany(post);
    } catch(error) {
        console.error("database connection failed." + error);
        throw error;
    } 
}


module.exports = { Post, all, find, insertMany }