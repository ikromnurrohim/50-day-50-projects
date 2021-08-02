const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7e97027bd567c711a4a088655fc303fe&page=1'
const IMAGES_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7e97027bd567c711a4a088655fc303fe&query="'


const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
// GET initial movies
getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview} = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMAGES_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
            </div>
        `
        main.appendChild(movieEl)
    });
}


function getClassByRate(vote) {
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log(search.value)

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)
    }else{
        window.location.reload()
    }
})


