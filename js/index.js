const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

let search = "";
let movies = [];

const fetchMovies = async () => {
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ac135fb0d591704a233b878a14f22d8a&query=${search}`)
        .then((res) => res.json());
    displayMovies();
};

const displayMovies = () => {
    result.innerHTML = "";
    movies.results.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = movie.title;
        result.appendChild(li);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    search = searchInput.value;
    fetchMovies();
});
