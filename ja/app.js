function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => postComment(data))
}

loadComment()

function postComment(comments) {
    const commentContainer = document.getElementById('load-comment');
    for (const comment of comments) {
        // console.log(comment)
        const div = document.createElement('div');
        div.classList.add('load-comment');
        div.innerHTML = `
        <h3 class="name">${comment.name}</h3>
        <h5 class="email">${comment.email}</h5>
        <p>${comment.body}</p>
        `;
        commentContainer.appendChild(div);
    }
}