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


// Fetch function
const searchFetchFromBar = (query) => {
    try {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
        .then(response => response.json())
        .then(dataFromApi => {
            test = dataFromApi
            let firstSection = document.querySelector('#recently-played')
            firstSection.innerHTML =''
            dataFromApi.data.forEach(data => firstSection.insertAdjacentHTML('afterbegin', `<div class="col px-2">
            <div class="card-homepage text-center">
              <div class="row">
                <div class="col-12">
                  <a href="album.html?album_Id=${data.album.id}"><img src="${data.album.cover_medium}" class="card-img-top img-fluid rounded-0" alt="image"></a>
                </div>
        
                <div class="col-12">
                  <div class="card-body text-left">
                    <a href="artist.html?album_Id=${data.artist.id}"><h6 class="card-text">${data.artist.name}</h6></a>
                    <h6 class="card-text">${data.title}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>`) )
            
            
            
            
            
        })
    } catch (e) {
        return e
    }
}

const loadDataFromSearchRequest = (userSearchValue) => {
        searchFetchFromBar(userSearchValue)
    
}

test


function searchUserData(e){
    e.preventDefault()
    let userSearchValue = document.querySelector('#userSearchInput').value
    loadDataFromSearchRequest(userSearchValue)
    let sectionTitle = document.querySelector('.recently-played-homepage h5')
    test = sectionTitle
    sectionTitle.innerText = 'Search Results'


}



   




