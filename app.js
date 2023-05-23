const contentGame = document.querySelector('.contents');
const platformCheckBox = document.querySelectorAll('.platform_checkbox'); 



const updateUI = async (data) => {
    

    const details = await data; 
    
    document.querySelectorAll('.contents').forEach(e => e.remove());
    

    //update details template 
    for (let i = 0; i < details.length; i++) {

        const clone = contentGame.cloneNode(true);

        clone.innerHTML = `
            <a href=${details[i].game_url}>
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



// };

// Form.addEventListener('submit', e => {
//     //prevent default action
//     e.preventDefault(); 

//     //get city value
//     const city = cityForm.city.value.trim(); 
//     cityForm.reset();

//     //update the ui with new city
//     updateCity(city)
//         .then(data => updateUI(data))
//         .catch(err => console.log(err));  

//     //set local storage
//     localStorage.setItem('city', city); 

// });

updateUI(getLiveGames()); 

platformCheckBox.forEach(function(checkbox) {
    checkbox.addEventListener('change', function(){
        if (this.checked === true) {
            updateUI(getGameByPlatform(this.id));


        } else if (this.checked === false){
            updateUI(getLiveGames());
        } 
    
    });
});    



// checkBox.addEventListener('click', e => {

//     if(e.target.IdList.contains('anime')) {
//         e.target.parentElement.remove(); 
//     }

// });
// const updateGame = async () => {
    
//     const liveGames = await getLiveGames(); 
//     //const weather = await getWeather(cityDets.Key);

//     return liveGames; 
//     // return {
//     //     cityDets: cityDets,
//     //     weather: weather
//     // };
// };

// updateUI(getLiveGames()).then(data => {
//     console.log('hello');
// });


    //.catch(err => console.log('rejected:', err.message));