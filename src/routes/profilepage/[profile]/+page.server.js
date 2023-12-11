export async function load({ params }) {
    let posts = [];
    let userData = {};
    await fetch("http://localhost:3001/posts/" + params.profile)
        .then((response) => response.json())
        .then((data) => (posts = data));
    await fetch("http://localhost:3001/acc/" + params.profile)
        .then((response) => response.json())
        .then((data) => (userData = data[0]));
    return { posts, userData };
}

