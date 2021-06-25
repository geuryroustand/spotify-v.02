let dataFromSearch


const searchFetch = async (query) => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
        let dataSearched = await response.json()
        return dataSearched
    } catch (e) {
        return e
    }
}
const search = async (userSearchValue) => {
    let data = await searchFetch(userSearchValue)
    dataFromSearch = data
    createCards()
}


window.onload = () =>{
    search('queen')

}




function createCards (){
    let firstSection = document.querySelector('#recently-played')
    firstSection.innerHTML =''
    dataFromSearch.data.forEach(data => firstSection.insertAdjacentHTML('afterbegin', `<div class="col px-2">
    <div class="card-homepage text-center">
      <div class="row">
        <div class="col-12">
          <a href="album.html?album_Id=${data.album.id}"><img src="${data.album.cover_medium}" class="card-img-top img-fluid rounded-0" alt="image"></a>
        </div>

        <div class="col-12">
          <div class="card-body text-left">
          <a href="artist.html?album_Id=${data.album.id}"><h6 class="card-text">${data.artist.name}</h6></a>
          <h6 class="card-text">${data.title}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>`) )
   
}




