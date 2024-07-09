const db = require('./db.js');

const tableName = 'post'

class Post {
    constructor(id, title, content, date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
    }
}

async function all() {
  try {
    const [rows, fieldDefs] = await db.pool.query(`
            SELECT * FROM ${tableName}
        `);
    var list = [];
    for (let row of rows) {
      let post = new Post(row.id, row.title, row.content, row.date);
      list.push(post);
    }
    return list;
  } catch (error) {
    console.error("database connection failed. " + error);
    throw error;
  }
}

async function insertOne(post) {
  try {
    const [rows, fieldDefs] = await db.pool.query(
      `
            INSERT INTO ${tableName} (title, content) VALUES (?, ?)
        `,
      [post.title, post.content]
    );
  } catch (error) {
    console.error("database connection failed. " + error);
    throw error;
  }
}

async function insertMany(posts) {
  for (let post of posts) {
    await insertOne(post);
  }
}

module.exports = { Post, all, insertOne, insertMany };