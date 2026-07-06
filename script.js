console.log();

let firststring="string";
const laststring="string";

console.log(firststring);

firststring="hello";

function RandomMovieRecommendation() {
    console.log("Random Movie Recommendation");
    const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight",,"The flash","Daredevil","Southland","The Residence","Superbook","Superstrikas"];
    const randomIndex = Math.floor(Math.random() * movies.length);
    console.log("Recommended Movie: " + movies[randomIndex]);
    const recbox=document.getElementById("movie-box");
    recbox.textContent = "Recommended Movie: " + movies[randomIndex];
}
function sayHello() {
    console.log("Hello, World!");
}

function addNumbers(a, b) {
    return a + b;
}