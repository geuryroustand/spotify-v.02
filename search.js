let dataFromSearchBar


// Fetch function
const searchFetchFromBar = (query) => {
    try {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
        .then(response => response.json())
        .then(data => dataFromSearchBar = data)
    } catch (e) {
        return e
    }
}

const loadDataFromSearchRequest = (userSearchValue) => {
        searchFetchFromBar(userSearchValue)
    
}



function createSearchHTML(){
    let adjacentSibling = document.querySelector('#top-buttons-homepage > div')
    adjacentSibling.insertAdjacentHTML('afterend',`
        <form class="form-inline">
            <input id="userSearchInput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onclick="searchUserData(event)">Search</button>
        </form>`)
}
createSearchHTML()

let test
function searchUserData(e){
    e.preventDefault()
    test = document.querySelector('#userSearchInput')
}
