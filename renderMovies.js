//This was pretty straightforward after doing the other exercises. 

function renderMovies(movies) {
    return movies.map(e =>`
    <div class="row mt-4">
        <div class="d-flex col-lg">
            <img style="height: 300px; width: 220px;" src="${e.poster}" class=" card-img-block">
            <div class="card mx-3">
                <div class="bg-light rounded card-body">
                <h1 style="font-size:16px; font-weight:600" class="card-title mb-0 ">${e.title}</h1>
                <p style="font-size:10px; font-weight:800"
                class="card-text">${e.year}</p>
                <p class="card-text">IMDB: <br> ${e.imdbRating}/10</p>
                <p class="card-text">Rotten Tomatoes: <br> ${e.rottenTomatoesRating * 100}%</p>
                </div>
            </div>
        </div>
    </div>
`).join("");
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}