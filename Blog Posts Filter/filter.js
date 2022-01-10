let posts = [];
let limit = 6;

function formatDate(date) {
    return `${ ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()] }, ${date.getDate()}, ${date.getFullYear()}`;
}

function populate(post) {
    const article = document.createElement('article');
    article.classList.add('post');

    article.innerHTML = `
        <div class = "post__meta">
            <div class = "post__tag-container">
                ${ post.meta.tags.map((tag) => `<span class = "post__tag">${tag}</span>`).join('') }
            </div>
            <div class = "post__date">${ formatDate(new Date(post.meta.date)) }</div>
        </div>
        <h3 class = "post__header">
            <a href = "${post.meta.url}">${post.title}</a>
        </h3>
        <div class = "post__author">
            <img class = "post__author-avatar" width = "55" src = "${post.author.avatar}" alt = "${post.author.name[0].firstName} ${post.author.name[1].lastName}">
            <div>
                <p class = "post__author-name">${post.author.name[0].firstName} ${post.author.name[1].lastName}</p>
                <p class = "post__author-role">
                    <small>${post.author.jobTitle}</small>
                </p>
            </div>
        </div>
        <div class = "post__body">${post.summary}</div>
        <a href = "${post.meta.url}" class = "btn">Read Post!</a>
    `;

    return article;
}

function display() {
    const fragment = document.createDocumentFragment();
    
    posts.slice(0, limit).forEach((post) => fragment.appendChild(populate(post)));

    document.querySelector('.post-container').innerHTML = '';
    document.querySelector('.post-container').appendChild(fragment);
}

async function deliver() {
    await fetch('posts.json')
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was erroneous!');
            }

            return response.json();
        })
        .then((data) => {
            posts = data.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
            display();
        })
        .catch((error) => {
            console.error('There has been a problem: ' + error.message);
        });
}

deliver();

document.querySelector('.btn-view').addEventListener('click', () => {
    limit += 6;
    display();
});

document.querySelector('[type = "search"]').addEventListener('keyup', (event) => {
    posts = posts.filter((post) => [post.title, post.summary, post.author.name[0].firstName, post.author.name[1].lastName, post.meta.tags.map((tag) => tag).join('')].map((text) => text).join('').toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
    display();
});