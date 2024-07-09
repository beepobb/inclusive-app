import { DataTypes } from '@sequelize/core';

import database from '../config/database.js';


const Staff = database.define(
    'Staff',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            default: 'user',
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
    },
    {
        tableName: 'Staff',
        timestamps: false,
    },
);


function maskStaffDetails(staff) {
    return {
        id: staff.id,
        name: staff.name,
        email: staff.email,
        points: staff.points,
    }
}

/** return all staffs */
async function getStaffs() {
    return await Staff.findAll();
}

/** find a staff satisfying name predicate */
async function findStaffByName(name) {
    const staff = await Staff.findOne({
        where: {
            name: name
        }
    });
    return staff;
}

/** find a staff satisfying email predicate */
async function findStaffByEmail(email) {
    const staff = await Staff.findOne({
        where: {
            email: email
        }
    });
    return staff;
}

/** find a staff satisfying id predicate */
async function findStaffById(id) {
    const staff = await Staff.findByPk(id);
    return staff;
}

/** insert a staff */
async function insertStaff(staff) {
    return await Staff.create({
        name: staff.email.substring(0, staff.email.indexOf('@')),
        email: staff.email,
        password: staff.password,
        role: staff.role ?? 'user',
        points: 0,
    });
}

/** update staff points */
async function updateStaffPoints(staffId, updatedStaffPoints) {
    const staff = await findStaffById(staffId);
    staff.points = updatedStaffPoints;
    await staff.save();
    return staff;
}

export default Staff;
export { getStaffs, findStaffByName, findStaffByEmail, findStaffById, insertStaff, maskStaffDetails, updateStaffPoints };
