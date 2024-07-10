import { BACKEND_URL } from "./urls.js";


async function createPost(post) {
    return fetch(`${BACKEND_URL}/api/post`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
    .then(data => data.json())
};

export default createPost;
