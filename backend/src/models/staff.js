import { db } from './db.js';

const collectionName = 'staff'

class Staff {
    constructor(id, name, password, role, points) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
        this.points = points;
    }
}

/** Return all staffs */
async function all() {
    const connection = await db.pool.getConnection();
    try {
        const [rows, fields] = await connection.query('SELECT * FROM staff');
        return rows.map(row => new Staff(row.id, row.name, row.password, row.role, row.points));
    } catch (error) {
        console.error("Database query failed:", error);
        throw error;
    } finally {
        connection.release();
    }
}

/** Find a set of staffs satisfying conditions */
async function find(conditions) {
    const connection = await db.pool.getConnection();
    try {
        const [rows, fields] = await connection.query('SELECT * FROM staff WHERE ?', conditions);
        return rows.map(row => new Staff(row.id, row.name, row.password, row.role, row.points));
    } catch (error) {
        console.error("Database query failed:", error);
        throw error;
    } finally {
        connection.release();
    }
}

/** Insert a list of staffs */
async function insertMany(staffs) {
    const connection = await db.pool.getConnection();
    try {
        const values = staffs.map(staff => [staff.id, staff.name, staff.password, staff.role, staff.points]);
        await connection.query('INSERT INTO staff (id, name, password, role) VALUES ?', [values]);
    } catch (error) {
        console.error("Database insertion failed:", error);
        throw error;
    } finally {
        connection.release();
    }
}

export { Staff, all, find, insertMany }
