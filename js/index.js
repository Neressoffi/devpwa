const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");
//const posterInput = document.getElementById("posterInput");
//const synopsisInput = document.getElementById("synopsisInput");
 let search ="";

 let movie = [];

const fetchMovies = async () => {
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ac135fb0d591704a233b878a14f22d8a&query=${title}`
    ).then((res) => res.json());
console.log(movies);
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    search = searchInput.Value;
    fetchMovies();
});


