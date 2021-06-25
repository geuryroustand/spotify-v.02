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
    createAlbumInfo()
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

    artistInfo.forEach(albumData => firstSection.insertAdjacentHTML('afterbegin', `<span>
    <div class="d-flex justify-content-between ol-list-div">
      <li>${albumData.title}</li>
      <i class="fas fa-play play-icon-ol-list ab d-none" aria-hidden="true"></i>
      <span class="span-minutes">${albumData.duration}</span>
    </div>
    <a href="artist.html?album_Id=${albumData.id}">${albumData.artist.name}</a>
  </span>`) )
   
}



// How to target HTML element outside of a function

// let test
function createAlbumInfo(){
    // let albumInfo = document.getElementById('album-info')
    // albumImg = albumInfo
    let albumImgSrc = document.querySelector('#album-info > div:first-child > img')
    albumImgSrc.src = dataFromSearch.cover_medium
    
    let albumTextFather = document.querySelector('#album-info')
    
    albumTextFather.insertAdjacentHTML('beforeend',`
    <div class="right-text">
          <h6>ALBUM</h6>
          <h3 class="h2">${dataFromSearch.title}</h3>
          <p>
            <img src="./assets/bohemian-small.jfif" alt="">
            <a href="artist.html?album_Id=">${dataFromSearch.artist.name}</a>
            <span>.</span>
            <span>2018</span>
            <span>.</span>
            <span>${dataFromSearch.nb_tracks} songs</span> <span>${dataFromSearch.duration} </span>
          </p>
        </div>`)
}

