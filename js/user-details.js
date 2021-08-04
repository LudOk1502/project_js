const jsonUser = new URL(location).searchParams.get('user');
const user = JSON.parse(jsonUser);
const userDiv = document.createElement('div');
userDiv.classList.add('userDiv');
const wrap = document.getElementsByClassName('wrap')[0];
userDiv.innerHTML = `id - ${user.id} <br> name - ${user.name} <br> username - ${user.username} <br> email - ${user.email} <br> address - street: ${user.address.street}; suite: ${user.address.suite}; city: ${user.address.city}; zipcode: ${user.address.zipcode}; geo: lat ${user.address.geo.lat}; lng ${user.address.geo.lng} <br> phone - ${user.phone} <br> website - ${user.website} <br> company - name: ${user.company.name}; catchPhrase: ${user.company.catchPhrase}; bs: ${user.company.bs}`;
let postBtn = document.createElement('button');
postBtn.classList.add('postBtn');
postBtn.innerText = 'post of current user';
const postsBox = document.createElement('div');
postsBox.classList.add('postsBox');
postBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(value => value.json()).then(posts => {
        postsBox.innerHTML = '';
        for (const post of posts) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('postDiv');
            const postP = document.createElement('p');
            postP.classList.add('postP');
            postP.innerText = `${post.title}`;
            let detailsBtn = document.createElement('button');
            detailsBtn.classList.add('detailsBtn');
            detailsBtn.innerText = 'Details';
            detailsBtn.onclick = function () {
                location.href = `post-details.html?post=${JSON.stringify(post)}`;
            }
            postDiv.append(postP, detailsBtn);
            postsBox.appendChild(postDiv);
        }
    })
}
wrap.append(userDiv, postBtn, postsBox);