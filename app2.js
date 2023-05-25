const mainData = document.querySelector('#whole-main'); 
const hamBurger = document.querySelector('#hamburger'); 


const updateUI = async (data) => {

    const details = await data; 
    
    const beforeScreenshots = `
        <main id="main-left">
            <section id="overwatch-pic">
                <img id="overwatchpic" src="${details.thumbnail}" />
            </section>

            <section id="buttons-near">
                <button id="free-button">FREE</button>
                <button id="play-now">Play Now <img src="/arrow-right-in-388-svgrepo-com.svg" /></button>
            </section>

            <section id="preference">
                <li><a href="/freetogame.html"><img id="like" src="/like.png" /></li></a>
                <li><a href="/freetogame.html"><img id="meh" src="/meh.png" /></li></a>
                <li><a href="freetogame.html"><img id="dislike" src="/dislike.png" /></li></a>
                <li><a href="/freetogame.html"><img id="add" src="/add.png" /></li></a>
            </section>

            <section id="account">
                <li id="3rd-party"><img id="person" src="/person-svgrepo-com.svg" /> Requires 3rd-Party Account</li>
            </section>
        </main>


        <main id="main-right">
            <section id="merge-start-pic">
                <section id="starting-statement">
                    <ul id="directory">
                        <li><a href="www.freetogame.com">Home</a></li>
                        <li>&#10217;</li>
                        <li><a href="www.freetogame.com/games"> Free Games</a></li>
                        <li>&#10217;</li>
                        <li><a href="/overwatch2.html"> ${details.title}</a></li>
                    </ul>

                    <header><h3 id="title-name">${details.title}</h3></header>

                    <ul id="ratings">
                        <li><img src="/star-favorite-1499-svgrepo-com.svg" /> Massively Positive</li>
                        <li>7 Member Ratings</li>
                        <li><img src="/person-svgrepo-com.svg" /> 393 Members have this game in their library!</li>
                    </ul>

                    <ul id="review">
                        <li>&#128488; 2 Reviews</li>
                        <li>&#8595; 18% Popularity</li>
                    </ul>
                </section>

                <section id="one-hundred">
                    <img src="/one-hundred-svgrepo-com.svg" />
                </section>

            </section>

            <form id="comments-and-suggestions">
                <section id="comment">
                    <p>What do you think about Overwatch 2?</p>
                    <section id="linkers">
                        <a href="/freetogame.html"><img src="/comfortable-easy-emoji-svgrepo-com.svg" /> 7</a>
                        <a href="/freetogame.html"><img src="/cry-emoji-emoticon-svgrepo-com.svg" /> 0</a>
                        <a href="/freetogame.html"><img src="/emoji-emoticon-frowning-svgrepo-com.svg"> 0</a>
                    </section>
                </section>

                <p id="text_button">
                    <textarea id="comment-text" name="comment" rows="3" cols="50"
                        placeholder="Write a review for ${details.title}! Share your thoughts with our community."></textarea>

                    <button><img src="alt-paper-plane-svgrepo-com.svg" /></button>
                </p>
            </form>

            <section id="about-overwatch2">
                <header><h3>About ${details.title}</h3></header>
                <blockquote id="oneparagraph">
                    ${details.description}
                </blockquote>

                <a href="/freetogame.html">&#43; Read More</a>
            </section>

            <section id="disclosure">
                <blockquote id="disclose">
                    Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding
                    experience. In order to keep everything free to use we may sometimes earn a small commission from some partners. Find more info
                    in our <a href="/freetogame.html">FAQ</a> page.
                </blockquote>
            </section>

            <section id="additional-information">
                <header><h3>Additional Information</h3></header>
                <p id="note">
                    <img src="/information-3-svgrepo-com.svg"> Please note this free-to-play game may or may not offer optional in-game purchases.
                </p>

                <ul id="row-one">
                    <li class="col">
                        <p class="aaa">Title</p>
                        <p>${details.title}</p>
                    </li>
                    <li class="col">
                        <p class="aaa">Developer</p>
                        <p>${details.developer}</p>
                    </li>
                    <li class="col">
                        <p class="aaa">Publisher</p>
                        <p>${details.publisher}</p>
                    </li>
                </ul>
                <ul id="row-two">
                    <li class="col">
                        <p class="aaa">Release Date</p>
                        <p>${details.release_date}</p>
                    </li>
                    <li class="col">
                        <p class="aaa">Genre</p>
                        <p>${details.genre}</p>
                    </li>
                    <li id="col">
                        <p class="aaa">Platform</p>
                        <p>${details.platform} (Client)</p>
                    </li>
                </ul>
            </section>`

            let screenShotsPics = '';

            if (details.screenshots.size !== 0) {
                screenShotsPics =
                    `<section id="screenshots">
                        <header><h3>${details.title} Screenshots</h3></header>
                        <ul id="pictures">
                            <img class="ss" src="${details.screenshots[0].image}" />
                            <img class="ss" src="${details.screenshots[1].image}" />
                            <img class="ss" src="${details.screenshots[2].image}" />
                        </ul>
                    </section>`
            } 

            let specs = 
                `<section id="minimum-specs">
                    <section id="merge-header">
                        <header><h3>Minimum System Requirements</h3></header>
                        <p id="windows">(${details.platform})</p>
                    </section>

                    <section id="specs">
                        <blockquote id="specs-blockquote">
                            ${details.title} is a browser based game and should run smoothly on practically any PC with a 
                            updated web-browser. If you have old hardware or software, you may still be able to play 
                            ${details.title}, but your game experience may suffer. For the best gameplay experience, we 
                            recommend the latest versions of Firefox, Chrome, or Internet Explorer. 
                        </blockquote>
                    </section>
                </section>

                <section id="copy-right">
                    <p>
                        All material on this page is copyrighted by ©${details.developer} and their respective licensors. All
                        other trademarks are the property of their respective owners.
                    </p>
                </section>`;

            if (details.platform === "Windows") {
                specs = 
                `<section id="minimum-specs">
                    <section id="merge-header">
                        <header><h3>Minimum System Requirements</h3></header>
                        <p id="windows">(Windows)</p>
                    </section>

                    <section id="specs">
                        <ul id="row-one-specs">
                            <li class="col">
                                <p class="aaa">OS</p>
                                <p>${details.minimum_system_requirements.os}</p>
                            </li>
                            <li class="col">
                                <p class="aaa">Processor</p>
                                <p>${details.minimum_system_requirements.processor}</p>
                            </li>
                        </ul>

                        <ul id="row-two-specs">
                            <li class="col">
                                <p class="aaa">Memory</p>
                                <p>${details.minimum_system_requirements.memory}</p>
                            </li>
                            <li class="col">
                                <p class="aaa">Graphics</p>
                                <p>${details.minimum_system_requirements.graphics}</p>
                            </li>
                        </ul>

                        <ul id="row-three-specs">
                            <li class="col">
                                <p class="aaa">Storage</p>
                                <p>${details.minimum_system_requirements.storage}</p>
                            </li>
                            <li class="col">
                                <p class="aaa">Additional Notes</p>
                                <p>Specifications may change during development</p>
                            </li>
                        </ul>
                    </section>
                </section>

                <section id="copy-right">
                    <p>
                        All material on this page is copyrighted by ©${details.developer} and their respective licensors. All
                        other trademarks are the property of their respective owners.
                    </p>
                </section>` } 
                    

                
            const reviews = 
                `<section id="user-reviews">
                    <header><h3>User Reviews</h3></header>
                    <section id="firstcomment">
                        <img id="pic" src="/emoji.png" />

                        <section id="comment-block">
                            <ul id="name-time">
                                <li><a href="/freetogame.html">olhabem</a></li>
                                <li id="time">2 months ago</li>
                            </ul>

                            <p id="comment"><img src="/emoji-emoticon-frowning-svgrepo-com.svg" /></p>
                        </section>
                    </section>

                    <section id="secondcomment">
                        <img id="pic" src="/basuki.jpeg" />

                        <section id="comment-block">
                            <ul id="name-time">
                                <li><a href="/freetogame.html">basuki</a></li>
                                <li id="time">4 months ago</li>
                            </ul>

                            <p id="comment">burikk</p>
                        </section>
                    </section>

                </section>

                <section id="button-caption">
                    <ul id="cap">
                        <li>Play this game and post your review!</li>
                        <li><button>SUBMIT REVIEW</button></li>
                    </ul>
                </section>

                <section id="games-alike">
                    <section id="like-button">
                        <header><h3>Games like Overwatch 2</h3></header>
                        <button>See All</button>
                    </section>

                    <ul id="three-games">
                        <li class="games-row" id="awesomenauts">
                            <a href="/overwatch2.html">
                                <img class="ss" src="/awesomenauts.png" />
                                <section id="header-free">
                                    <h2>Awesomenauts</h2>
                                    <img id="free" src="/free.png" />
                                </section>
                            </a>
                        </li>

                        <li class="games-row" id="teeworlds">
                            <a href="/overwatch2.html">
                                <img class="ss" src="/teeworlds.png" />
                                <section id="header-free">
                                    <h2>Teeworlds</h2>
                                    <img id="free" src="/free.png" />
                                </section>
                            </a>
                        </li>

                        <li class="games-row" id="theultimatest">
                            <a href="/overwatch2.html">
                                <img class="ss" src="/theultimatestbattle.png" />
                                <section id="header-free">
                                    <h2>Ultimate Test..</h2>
                                    <img id="free" src="/free.png" />
                                </section>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>

                `;

        mainData.innerHTML = beforeScreenshots + screenShotsPics + specs + reviews;
    };



updateUI(getCertainGame());