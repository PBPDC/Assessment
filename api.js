//get live game list 
const getLiveGames = async () => {
    const base = 'https://www.freetogame.com/api/games';

    const response = await fetch(base); 
    const data = await response.json(); 

    return data;

};

//get games by platform
const getGameByPlatform = async (platform) => {
    const base = 'https://www.freetogame.com/api/games';
    const query = `?platform=${platform}`; 

    const response = await fetch(base + query); 
    const data = await response.json(); 

    // console.log(data);

    return data; 

};

//filter games by category or tag
const getGameByCategory = async (category) => {
    const base = 'https://www.freetogame.com/api/games';
    const query = `?category=${category}`; 

    const response = await fetch(base + query); 
    const data = await response.json(); 

    return data; 

};

//sort games 
const sortByGames = async (sort) => {
    const base = 'https://www.freetogame.com/api/games';
    const query = `?sort-by=${sort}`; 

    const response = await fetch(base + query); 
    const data = await response.json(); 

    return data; 

};

//get by platform and category and sort 
const getGamesByPlatformCategorySort = async (platform, category, sort) => {
    const base = 'https://www.freetogame.com/api/games';
    const query = `?platform=${platform}&category=${category}&sort-by=${sort}`; 

    const response = await fetch(base + query); 
    const data = await response.json(); 

    return data; 

};

//filter games by tags and platform
const getGamesByTagPlatform = async (tag, platform) => {
    const base = 'https://www.freetogame.com/api/filter';
    const query = `?tag=${platform}&platform=${platform}`; 

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

};


// getLiveGames().then (data => {
//     return getLiveGames();
// });

// getGameByPlatform().then (data => {
//     return data;
// });






