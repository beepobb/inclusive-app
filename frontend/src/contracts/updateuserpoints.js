import { BACKEND_URL } from "./urls.js";


async function updateUserPoints(userId, points) {
    return fetch(`${BACKEND_URL}/api/staff/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            points: points
        }),
    })
    .then(data => data.json())
};

export default updateUserPoints;
