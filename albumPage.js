let dataFromSearch


// Fetch function
const searchFetch = async (query) => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + query)
        let dataSearched = await response.json()
        return dataSearched
    } catch (e) {
        return e
    }
}

// Call all the functions and load Data from the API
const loadData = async (userSearchValue) => {
    // First step Fetch Data
    let data = await searchFetch(userSearchValue)
    dataFromSearch = data
    // Load the cards
    createTracksAlbumPage()
}

window.onload = () => {
    let IdUrl = new URLSearchParams(window.location.search).get("album_Id")
    // Call the loadData which will also call the functions inside
    loadData(IdUrl)
    
}




function createTracksAlbumPage (){
    let firstSection = document.querySelector('#albumPageTrackList')
    firstSection.innerHTML =''
    let artistInfo = dataFromSearch.tracks.data

    console.log(artistInfo)

    artistInfo.forEach(albumData => firstSection.insertAdjacentHTML('afterbegin', `<span>
    <div class="d-flex justify-content-between ol-list-div">
      <li>${albumData.title}</li>
      <i class="fas fa-play play-icon-ol-list ab d-none" aria-hidden="true"></i>
      <span class="span-minutes">${albumData.duration}</span>
    </div>
    <a href="artist.html?artist_id=${albumData.artist.id}">${albumData.artist.name}</a>
  </span>`) )
   
}
