function getPostById(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

getPostById(520)
    .then(response => response.json())
    .then(data => {
        console.log(data.userId);
        console.log(data.id);
        console.log(data.title);
        console.log(data.body);
    });
