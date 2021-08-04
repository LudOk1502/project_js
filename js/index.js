fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => {
    const wrap = document.getElementsByClassName('wrap')[0];
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('userDiv');
        userDiv.innerText = `${user.id} - ${user.name}`;
        let detailsBtn = document.createElement('button');
        detailsBtn.classList.add('detailsBtn');
        detailsBtn.innerText = 'Details';
        detailsBtn.onclick = function () {
            location.href = `user-details.html?user=${JSON.stringify(user)}`;
        }
        wrap.appendChild(userDiv);
        userDiv.appendChild(detailsBtn);
    }
})