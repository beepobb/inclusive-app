import { BACKEND_URL } from "./urls.js";


async function getUserById(userId) {
    return fetch(`${BACKEND_URL}/api/staff/${userId}`, {
        method: 'GET',
    })
    .then(data => data.json())
};

export default getUserById;
