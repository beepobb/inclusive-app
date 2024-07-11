import { BACKEND_URL } from "./urls.js";


async function logIn(credentials) {
    return fetch(`${BACKEND_URL}/api/staff/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })
    .then(data => data.json())
};

export default logIn;
