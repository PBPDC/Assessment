const mainData = document.querySelector('#whole-main'); 
const titleGame = document.querySelector('head'); 

const hamBurgerButton = document.querySelector('#hamburger'); 
const freeToGameButton = document.querySelector('#free-games'); 
const browserGamesButton = document.querySelector('#browser-games');
const othersButton = document.querySelector('#others');

const dropDownHamBurger = document.querySelector('.dropdown-container'); 
const dropDownBrowser = document.querySelector('.dropdown-browser');
const dropDownPC = document.querySelector('.dropdown-pc');
const dropDownOthers = document.querySelector('.dropdown-others');


// const sendButton = document.querySelector('#send-button');
const readMoreButton = document.querySelector('.readmore');  

const urlParams = new URLSearchParams(); 
const query = window.location.search;



const updateUI = async (data) => {

    const details = await data; 

    let paragraphs = details.description.split(/\r\n\r\n/);

    titleGame.innerHTML = `
        <meta charset="UTF-8">
        <link rel="icon" href="/freetogame.png" />
        <title>${details.title} Download and Reviews (2023)</title>
        <link rel="stylesheet" href="styles.css" />
    `;

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
                <li><img class="hover" id="like" onclick="mustBeSignedIn();" src="/like.png" /></li>
                <li><img class="hover" id="meh" onclick="mustBeSignedIn();" src="/meh.png" /></li>
                <li><img class="hover" id="dislike" onclick="mustBeSignedIn();" src="/dislike.png" /></li>
                <li><img class="hover" id="add" onclick="mustBeSignedIn();" src="/add.png" /></li>
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
                        <img class="hover" onclick="mustBeSignedIn();" src="/comfortable-easy-emoji-svgrepo-com.svg" /> 7</a>
                        <img class="hover" onclick="mustBeSignedIn();" src="/cry-emoji-emoticon-svgrepo-com.svg" /> 0</a>
                        <img class="hover" onclick="mustBeSignedIn();" src="/emoji-emoticon-frowning-svgrepo-com.svg"> 0</a>
                    </section>
                </section>

                <p id="text_button">
                    <textarea id="comment-text" name="comment" rows="3" cols="50"
                        placeholder="Write a review for ${details.title}! Share your thoughts with our community."></textarea>

                    <button id="send-button" onclick="mustBeSignedIn();"><img id="send" src="alt-paper-plane-svgrepo-com.svg" /></button>
                </p>
            </form>

            <section id="about-overwatch2">
                <header><h3>About ${details.title}</h3></header>
                <section id="oneparagraph">
                    
                </section>

                <button class="readmore" onclick="makeHeightBigger();">&#43; Read More</button>
            </section>

            <section id="disclosure">
                <blockquote id="disclose">
                    Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding
                    experience. In order to keep everything free to use we may sometimes earn a small commission from some partners. Find more info
                    in our <a href="https://www.freetogame.com/faq">FAQ</a> page.
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
            </section>`;

            

            let screenShotsPics = '';

            if (details.screenshots.size > 0) {
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
                        <li><a href="#comments-and-suggestions"><button id="submit-review">SUBMIT REVIEW</button></a></li>
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

        paragraphs.forEach(paragraph => {
            let p = document.createElement('p'); 
    
            p.innerHTML = `${paragraph}`;
    
            document.querySelector("#oneparagraph").appendChild(p);
        });
    };




//     .catch(err => {
//         alert(err.message); 
//         window.location.href = 'https://freetogame.com';
// });


const error = () => {

    mainData.innerHTML = `
        <section style='height:500px'>
            <p style='font-size:50px'> Sorry, something went wrong.</p> 
            <a href='/index.html'>Click here to return to main page.</a>
        </section>
    `;
    mainData.style.color='gray';
    mainData.style.justifyContent='center';
    mainData.style.textAlign='center';
    mainData.style.height='500px';
    mainData.style.paddingTop ='50px';
}

function mustBeSignedIn() {
    alert("You must be signed in to perform this action");
};

function makeHeightBigger() {
    
    const readmore = readMoreButton.classList; 

    if (!readmore.contains("on")) {
        readmore.add('on'); 
        document.querySelector('#oneparagraph').style.height = 'auto'; 
    } else {
        readmore.toggle('on');
        document.querySelector('#oneparagraph').style.height = '100px';
    }
};

    

hamBurgerButton.addEventListener('click', () => {

    if (dropDownHamBurger.style.display === "block") {
        dropDownHamBurger.style.display = "none";
    } else {
        dropDownHamBurger.style.display = "block";
    }
    
});

freeToGameButton.addEventListener('click', () => {

    if (dropDownPC.style.display === "block") {
        dropDownPC.style.display = "none";
    } else {
        dropDownPC.style.display = "block";
    }
    
});

browserGamesButton.addEventListener('click', () => {

    if (dropDownBrowser.style.display === "block") {
        dropDownBrowser.style.display = "none";
    } else {
        dropDownBrowser.style.display = "block";
    }
    
});

othersButton.addEventListener('click', () => {

    if (dropDownOthers.style.display === "block") {
        dropDownOthers.style.display = "none";
    } else {
        dropDownOthers.style.display = "block";
    }
    
});

function addUrlParameter(id, value) {
    urlParams.set(id, value); 

    const newUrl = window.location.pathname + '?' + urlParams.toString(); 
    window.history.pushState(null, '', newUrl); 
};

window.onpageshow = () => {
 
    const id = query.split('=')[1]; 

    addUrlParameter('id', id); 

    updateUI(getCertainGame(urlParams.get('id'))).catch(err => {
        console.log(err);
        error();
    })

    


}

