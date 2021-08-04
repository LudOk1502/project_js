const jsonPost = new URL(location).searchParams.get('post');
const post = JSON.parse(jsonPost);
const postDiv = document.createElement('div');
postDiv.classList.add('postDiv');
const wrap = document.getElementsByClassName('wrap')[0];
postDiv.innerHTML = `userId: ${post.userId} <br> id: ${post.id} <br> title: ${post.title} <br> body: ${post.body}`;
const commentsBtn = document.createElement('button');
commentsBtn.classList.add('commentsBtn');
commentsBtn.innerText = 'Comments';
const commentsBox = document.createElement('div');
commentsBox.classList.add('commentsBox');
commentsBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            commentsBox.innerHTML = '';
            for (const comment of comments) {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('commentDiv');
                commentDiv.innerText = `${comment.body}`;
                commentsBox.appendChild(commentDiv);
            }
        });
}
wrap.append(postDiv, commentsBtn, commentsBox);