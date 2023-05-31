//get live game list 
const getLiveGames = async () => {
    const base = 'https://www.freetogame.com/api/games';

    const response = await fetch(base); 
    const data = await response.json(); 

    return data; 

};


const getGamesByPlatformCategorySort = async (platform, category, sort) => {
    const base = 'https://www.freetogame.com/api';
    let query = ``;
    
    const categories = Array.from(category).join('.');

    if (category.size > 1) {
        query = `/filter?tag=${categories}&sort-by=${sort}&platform=${platform}`; 
    } else if (category.size === 1){
        query = `/games?platform=${platform}&category=${categories}&sort-by=${sort}`; 
    } else {
        query = `/games?platform=${platform}&sort-by=${sort}`; 
    }

    const response = await fetch(base + query); 
    const data = await response.json(); 

    return data; 

};


//return certain game
const getCertainGame = async (id) => {

    const base = 'https://www.freetogame.com/api/game';

    const query = `?id=${id}`; 

    const response = await fetch(base + query); 
    const data = await response.json();

            
    return data; 

    // const path = window.location.pathname;
    // const urlGameTitle = path.split('html')[0].split(/[./]/)[1];
    // const queryString = window.location.search;  

    // const wholeGameList = getLiveGames(); 

    // const details = await wholeGameList; 

    // const params = new URLSearchParams();
    
    // // const url = new URL(window.location.href); 

  




    // for (let j = 0; j < details.length; j++) {
    //     params.set(details[j].title.toLowerCase().split(' ').join('-'), details[j].id); 
        
    // }


    

    // for (let i = 0; i < params.size; i++) {
    //     if()
    // }

    // for (let i = 0; i < details.length; i++) {

    //     const queryString = new URLSearchParams(details[i].id).toString();

    //     console.log(queryString);
        
        // if (urlGameTitle === details[i].title.toLowerCase().split(' ').join('')) {
                
        //     console.log('hello');
            
        //     const query = `?id=${details[i].id}`; 

        //     const response = await fetch(base + query); 
        //     const data = await response.json();

            
        //     return data; 

        // } else {
        //     // alert("INVALID GAME URL"); 
        //     console.log('not here');
        // }
    // };

      

    

    
    // const base = 'https://www.freetogame.com/api/game';
    // const query = `?id=${id}`; 

    


    // const response = await fetch(base + query); 
    // const data = await response.json(); 

    // return data; 

};






