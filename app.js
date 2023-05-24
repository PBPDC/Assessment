const contentGame = document.querySelector('.contents');
const categoryCheckBox = document.querySelectorAll('.filter-checkbox'); 
const sortDropDown = document.querySelector('#sort');
const hamBurger = document.querySelector('#hamburger'); 
const dropDownContainer = document.querySelector('.dropdown-container'); 





const updateUI = async (data) => {
    

    const details = await data; 
    
    document.querySelectorAll('.contents').forEach(e => e.remove());
    

    //update details template 
    for (let i = 0; i < details.length; i++) {

        const clone = contentGame.cloneNode(true);

        clone.innerHTML = `
            <a href=${details[i].freetogame_profile_url}>
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
                    <li><img id="${details[i].platform}" src="/windows-174-svgrepo-com.svg" alt="${details[i].platform}" /></li>
                </ul>
            </ul>           
        `;

        document.querySelector(".box-games").appendChild(clone); 



    };


};


updateUI(getLiveGames()); 


const category = new Set(); 
const platformUsed = new Set();   


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

hamBurger.addEventListener('click', () => {

    if (dropDownContainer.style.display === "block") {
        dropDownContainer.style.display = "none";
    } else {
        dropDownContainer.style.display = "block";
    }
    
    
    
});
