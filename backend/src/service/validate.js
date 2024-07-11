import { findStaffByEmail } from '../models/staff.js';


async function validateUser(userInput) {
    const user = await findStaffByEmail(userInput.email);
    if (!user) {
        return [false, 'User not found'];
    }
    if (user.password !== userInput.password) {
        return [false, 'Username or Password is incorrect'];
    }
    return [true, 'User is valid'];
}

export { validateUser };
