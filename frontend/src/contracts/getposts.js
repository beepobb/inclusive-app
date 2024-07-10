import { BACKEND_URL } from "./urls.js";


async function getPosts(text) {
    return fetch(`${BACKEND_URL}/api/post/search?text=${text}`, {
        method: 'GET',
    })
    .then(data => data.json())
};

export default getPosts;
