const tbody = document.querySelector('#tbody');

// console.log(tbody);

const createElmentHtml = () => {
  const html = `

  <tr>
  <th class="border-0" scope="row">
    <span class="popular-table-heading">
      <span class="popular-number"> 1 </span>
      <span class="play-popular d-none"><i class="fas fa-play" aria-hidden="true"></i></span>
      <img class="mx-2" src="./assets/artist-page/albums-1.jpg" alt="album">

      ${title}
    </span>
  </th>
  <td class="border-0"> ${(1, 033, 746, 485)} </td>
  <td class="border-0">
    <span class="like-poupular invisible"><i class="far fa-heart" aria-hidden="true"></i></span>
    <span class="poupular-time ml-2"> ${duretion}  </span>
    <div class="three-dots-dropdown popular-dots invisible">
      <div class="dropdown">
        <button class="
              btn btn-outline-light
              border-0
              dropdown-toggle
            " type="button" id="three-dots-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ...
        </button>
        <div class="dropdown-menu" aria-labelledby="three-dots-dropdown">
          <a class="dropdown-item" href="#">Add to queue</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Go to song radio</a>
          <a class="dropdown-item" href="#">Go to album</a>
          <a class="dropdown-item" href="#">Show credits</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Save to your Liked Songs</a>
          <a class="dropdown-item" href="#">Add to playlist</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Share</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Open in Desktop app</a>
        </div>
      </div>
    </div>
  </td>
</tr>
    
    `;
};

// const fetchtData = ((artist )=>{
//     fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/ ${}`)
// })

window.onload = () => {
  const artistURL = new URLSearchParams(window.location.search).get('album_Id');
  console.log(artistURL)

  fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${artistURL}`)
    .then(response => response.json())
    .then(data => console.log(data));
};

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

// let dataFromSearch

// const searchFetch = (query) => {
//     try {
//         fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + query)
//         .then(response => response.json())
//         .then(data => dataFromSearch = data)
//     } catch (e) {
//         return e
//     }
// }

// const loadData = async (userSearchValue) => {
//         searchFetch(userSearchValue)

// }

// window.onload = () => {
//     let artistIdUrl = new URLSearchParams(window.location.search).get("artist_id")

//     loadData(artistIdUrl)

// }
