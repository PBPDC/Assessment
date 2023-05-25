const contentGame = document.querySelector('.contents');
const categoryCheckBox = document.querySelectorAll('.filter-checkbox'); 
const sortDropDown = document.querySelector('#sort');

const hamBurgerButton = document.querySelector('#hamburger'); 
const freeToGameButton = document.querySelector('#free-games'); 
const browserGamesButton = document.querySelector('#browser-games');
const othersButton = document.querySelector('#others');

const dropDownHamBurger = document.querySelector('.dropdown-container'); 
const dropDownBrowser = document.querySelector('.dropdown-browser');
const dropDownPC = document.querySelector('.dropdown-pc');
const dropDownOthers = document.querySelector('.dropdown-others');





const updateUI = async (data) => {
    

    const details = await data; 
    
    document.querySelectorAll('.contents').forEach(e => e.remove());
    

    //update details template 
    for (let i = 0; i < details.length; i++) {

        const clone = contentGame.cloneNode(true);
        clone.setAttribute("id", `${details[i].id}`); 

        clone.innerHTML = `
                <a href="/overwatch2.html">
                    <img class="thumbnail" id="${details[i].id}" src="${details[i].thumbnail}" alt="${details[i].title}.png" />
                    <section id="header-free">
                        <h2>${details[i].title}</h2>
                        <img id="free" src="/free.png" />
                    </section>
                    <p class="caption">${details[i].short_description}</p>
                </a>
                <ul id="content-bottom">
                    <li>
                        <select id="add-to-lib" title="Add to library">
                            <option id="plus-icon" value="" disabled selected>&#8862;</option>
                            <option value="currently-playing">&#127918; Currently Playing</option>
                            <option value="played">&#10004; Played</option>
                            <option value="completed">&#127942; Completed</option>
                            <option value="play-later">&#128339; Play Later</option>
                        </select>
                    </li>
                    <ul id="type-windows">
                        <li class="type">${details[i].genre}</li>
                        <li><img id="${details[i].platform}" src=${checkPlatformForPic(details[i].platform)} alt="${checkPlatformForPic(details[i].platform)}" /></li>
                    </ul>
                </ul>        
            `;

        document.querySelector(".box-games").appendChild(clone); 



    };

    document.querySelectorAll('.contents').forEach(function(event) {
        event.addEventListener('click', openGame);
    });

};


updateUI(getLiveGames()); 


const category = new Set(); 
const platformUsed = new Set();   

function checkPlatformForPic(platform) {
    if (platform === "PC (Windows)") {
        return '/windows-174-svgrepo-com.svg'
    }

    return '/browser-fill-svgrepo-com.svg'
};

function openGame(event) {
    const game = event.currentTarget; 
    console.log(game.id);

    localStorage.setItem("gameId", game.id); 

};


function checkFilter(event) { 
    const checkbox = event.target; 
    let platformDefault = "all"; 

    if (platformUsed.has(checkbox.id) && (checkbox.id === "browser" || checkbox.id === "pc")) {
        platformUsed.delete(checkbox.id); 
    } else if (!platformUsed.has(checkbox.id) && (checkbox.id === "browser" || checkbox.id === "pc")) {
        platformUsed.add(checkbox.id); 
    } else if (category.has(checkbox.id)) {
        category.delete(checkbox.id); 
    } else {
        category.add(checkbox.id); 
    }

    if (platformUsed.size === 1) {
        platformDefault = Array.from(platformUsed).join('');
    }

    

    updateUI(getGamesByPlatformCategorySort(platformDefault, category, sortDropDown.value)); 


}

categoryCheckBox.forEach(function(checkbox) {
    checkbox.addEventListener('change', checkFilter);
   
});

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




