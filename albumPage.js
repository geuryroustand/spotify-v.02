let dataFromSearch



const searchFetch = async (query) => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + query)
        let dataSearched = await response.json()
        return dataSearched
    } catch (e) {
        return e
    }
}
const search = async (userSearchValue) => {
    let data = await searchFetch(userSearchValue)
    dataFromSearch = data
}

window.onload = () => {
    let IdUrl = new URLSearchParams(window.location.search).get("album_Id")
    search(IdUrl)
    
}

