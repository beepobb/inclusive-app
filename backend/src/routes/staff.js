import { Router } from 'express';

import { getStaffs, findStaffByName, findStaffByEmail, findStaffById, maskStaffDetails, insertStaff, updateStaffPoints } from '../models/staff.js';
import { validateUser } from '../service/validate.js';
import { generateJWT } from '../service/jwt.js';


const staffRouter = Router();

// GET staff listing
staffRouter.get('/', async function(req, res, next) {
    try {
        const staffs = await getStaffs();
        res.json(staffs.map(maskStaffDetails));
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

// GET staff find by id
staffRouter.get('/id/:staffId', async function(req, res, next) {
    try {
        const staff = await findStaffById(req.params.staffId);
        if (staff === null) {
            res.status(404).json({ message: "User does not exist" });
            return;
        }
        res.json(maskStaffDetails(staff));
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

// GET staff find by name
staffRouter.get('/name/:staffName', async function(req, res, next) {
    try {
        const staff = await findStaffByName(req.params.staffName);
        if (staff === null) {
            res.status(404).json({ message: "User does not exist" });
            return;
        }
        res.json(maskStaffDetails(staff));
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

// GET staff find by email
staffRouter.get('/email/:staffEmail', async function(req, res, next) {
    try {
        const staff = await findStaffByEmail(req.params.staffEmail);
        if (staff === null) {
            res.status(404).json({ message: "User does not exist" });
            return;
        }
        res.json(maskStaffDetails(staff));
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

// POST staff creation
staffRouter.post('/', async function(req, res, next) {
    try {
        const newStaff = await insertStaff(req.body);
        res.json(maskStaffDetails(newStaff));
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

// POST staff signin
staffRouter.post('/signin', async function(req, res, next) {
    try {
        const [isUserValid, reason] = await validateUser(req.body);
        if (!isUserValid) {
            res.status(401).json({
                allowEntry: isUserValid,
                message: reason,
            });
            return
        }

        const staff = await findStaffByEmail(req.body.email);
        res.json({
            id: staff.id,
            name: staff.name,
            email: staff.email,
            points: staff.points,
            token: generateJWT(staff),
        });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

// PUT staff points update
staffRouter.put('/:staffId', async function(req, res, next) {
    try {
        const staff = await updateStaffPoints(req.params.staffId, req.body.points);
        res.json(maskStaffDetails(staff));
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            error: "Internal Server Error",
            statusCode: 500,
            stackTrace: err.stack,
        });
    }
})

export default staffRouter;
