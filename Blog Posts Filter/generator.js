const fs = require('fs');
const faker = require('faker');
const { phrase, sentence } =  require('coder-ipsum');

let posts = [];
const POST_COUNT = 600;
let userID = 1;

function post() {
    this.author = {
        id: userID++,
        name: [
            {
                firstName: faker.name.firstName()
            },
            {
                lastName: faker.name.lastName()
            }
        ],
        avatar: faker.internet.avatar(),
        jobTitle: faker.name.jobTitle()
    };

    this.title = phrase(4);
    this.summary = sentence(36);

    this.meta = {
        tags: phrase(2).split(' '),
        url: "#",
        date: faker.date.past()
    };
}

for (let i = 0; i < POST_COUNT; i++) {
    posts.push(new post());
}

fs.writeFile('posts.json', JSON.stringify(posts, null, 2), (error) => console.log(error));