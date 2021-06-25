// FETCH with async / await

// let dataFromSearch

// // Fetch function
// const searchFetch = async (query) => {
//     try {
//         let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + query)
//         let dataSearched = await response.json()
//         return dataSearched
//     } catch (e) {
//         return e
//     }
// }

// // Call all the functions and load Data from the API
// const loadData = async (userSearchValue) => {
//     // First step Fetch Data
//     let data = await searchFetch(userSearchValue)
//     dataFromSearch = data
//     // Load the cards
  
// }

// window.onload = () => {
//     let artistIdUrl = new URLSearchParams(window.location.search).get("artist_id")
//     // Call the loadData which will also call the functions inside 
//     loadData(artistIdUrl)
    
// }

let dataFromSearch


// Fetch function
const searchFetch = (query) => {
    try {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + query)
        .then(response => response.json())
        .then(data => dataFromSearch = data)
    } catch (e) {
        return e
    }
}

// Call all the functions and load Data from the API
const loadData = async (userSearchValue) => {
        searchFetch(userSearchValue)
    
    // Load the cards
  
}

window.onload = () => {
    let artistIdUrl = new URLSearchParams(window.location.search).get("artist_id")
    // Call the loadData which will also call the functions inside 
    loadData(artistIdUrl)
    
}
