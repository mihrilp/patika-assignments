import axios from 'axios';

async function getData(userId) {
    const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    return { userData, userPosts };
}

export default getData;