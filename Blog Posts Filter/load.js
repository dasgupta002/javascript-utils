(function loader() {
    const CSS = `
        <style>
            .skeleton {
                border-radius: 5px;
                animation-name: loading;
                animation-duration: 650s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }

            .post__tag, .post__author-role {
                height: 20px;
                width: 70px;
            }

            .post__tag:last-of-type {
                width: 112px;
            }

            .post__date, .post__author-name {
                height: 27px;
                width: 138px;
            }

            .post__author-name {
                margin-bottom: 11px;
            }

            .post__header {
                min-height: 118px;
                border-radius: 0px;
            }

            .post__author-avatar {
                border-radius: 50%;
                height: 60px;
                width: 60px;
            }

            .post__body .skeleton {
                min-height: 18px;
                margin-bottom: 10px;
            }
            
            .post__body .skeleton:last-of-type {
                width: 80%;
            }

            .btn {
                min-height: 40px;
                min-width: 200px;
            }

            @keyframes loading {
                0% {
                    background-color: hsl(var(--light));
                }
                
                100% {
                    background-color: hsl(var(--dark) / 0.2);
                }
            }
        </style>
    `;

    const skeleton = `
        <article class = "post">
            <div class = "post__meta">
                <div class = "post__tag-container">
                    <span class = "post__tag skeleton"></span>
                    <span class = "post__tag skeleton"></span>
                </div>
                <div class = "post__date skeleton"></div>
            </div>
            <h3 class = "post__header skeleton"></h3>
            <div class = "post__author">
                <div class = "post__author-avatar skeleton"></div>
                <div>
                    <p class = "post__author-name skeleton"></p>
                    <p class = "post__author-role skeleton"></p>
                </div>
            </div>
            <div class = "post__body">
                <p class = "skeleton"></p>
                <p class = "skeleton"></p>
                <p class = "skeleton"></p>
                <p class = "skeleton"></p>
            </div>
            <a href = "#" class = "btn skeleton"></a>
        </article>
    `;

    document.querySelector('.post-container').innerHTML = [skeleton.repeat(3), CSS].join('');
})();