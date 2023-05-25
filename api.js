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

    console.log(query);

    const response = await fetch(base + query); 
    const data = await response.json(); 

    return data; 

};


//return certain game
const getCertainGame = async () => {
    const id = localStorage.getItem("gameId"); 
    
    const base = 'https://www.freetogame.com/api/game';
    const query = `?id=${id}`; 

    const response = await fetch(base + query); 
    const data = await response.json(); 

    return data; 

};






