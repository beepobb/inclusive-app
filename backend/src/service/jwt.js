import jwt from 'jsonwebtoken';

import configuration from "../config/config.js";


function generateJWT(staff) {
    return jwt.sign(
        { id: staff.id, name: staff.name, email: staff.email },
        configuration.app.passphrase,
        { expiresIn: "1h" },
    );
}

export { generateJWT };
