movies = myObj.movies[Math.floor(Math.random() * myObj.movies.length)];

document.getElementById("movieTitle").innerHTML = movies.title;
document.getElementById('movieImage').style.backgroundImage = 'url(' + "images/" + movies.image + ')';
document.getElementById("movieRotten").href = 'https://www.rottentomatoes.com' + movies.URLRotten;
document.getElementById("movieRotten").target = "_blank";
document.getElementById("movieGoodreads").href = 'https://www.goodreads.com/book/show/' + movies.URLGoodreads;
document.getElementById("movieGoodreads").target = "_blank";
document.getElementById("ratingRotten").innerHTML = movies.rateRotten;
document.getElementById("ratingGoodreads").innerHTML = movies.rateGoodreads;

var propRotten = movies.rateRotten / 10;
var propGoodreads = movies.rateGoodreads / 5;

if ( propRotten < propGoodreads ) {
    document.getElementById("movieAnswer").innerHTML = "Igen";
} else {
    document.getElementById("movieAnswer").innerHTML = "Nem";
}
