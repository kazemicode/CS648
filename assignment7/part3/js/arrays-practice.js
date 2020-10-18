//STEP 1
let favMovies = ["The Royal Tenenbaums", "Fifth Element", "Hackers", "Scott Pilgrim vs. the World", "Back to the Future"];
console.log("The second movie (position 1) in favMovies is: " + favMovies[1]); // second movie is at position 1

//STEP 2
var movies = new Array(5);
console.log("The length of the movies array is: " + movies.length);
for(var i = 0; i < movies.length; i++) {
    movies[i] = favMovies[i];
}
console.log("The first movie (position 0) in favMovies is: " + movies[0]);

//STEP 3
for(var i = 0; i < movies.length; i++) {
    if(i == 3) {
        movies[i] = "Total Recall";
    }
    else {
        movies[i] = favMovies[i];
    }
    
}
movies.push(movies[4]);
console.log("The length of the movies array is now: " + movies.length);

//STEP 4
var movies = [];
for(var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
delete movies[0]; // delete first method
console.log(movies);


//STEP 5
var movies = [];
for(var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
movies.push("Total Recall");
movies.push("Starship Troopers");
console.log("printing movies contents with for loop:");
for(var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

//STEP 6
var movies = [];
for(var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
movies.push("Total Recall");
movies.push("Starship Troopers");
console.log("printing movies contents with for-in loop:");
for(movie in movies) {
    console.log(movies[movie]);
}

//STEP 7
var movies = [];
for(var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
movies.push("Total Recall");
movies.push("Starship Troopers");
console.log("printing SORTED movies contents with for-in loop:");
for(movie in movies.sort()) {
    console.log(movies[movie]);
}

//STEP 8
var movies = [];
var leastFavMovies = ["Her", "The Cell", "Lucy"];
for(var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
movies.push("Total Recall");
movies.push("Starship Troopers");
console.log("Movies I like:");
for(movie in movies) {
    console.log(movies[movie]);
}
console.log("Movies I regret watching:");
for(movie in leastFavMovies) {
    console.log(leastFavMovies[movie]);
}


//STEP 9
var movies = [];
var leastFavMovies = ["Her", "The Cell", "Lucy"];
for(var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
movies.push("Total Recall");
movies.push("Starship Troopers");
var movies = movies.concat(leastFavMovies);
console.log("Printing concatenated movies list in reverse sorted order: ");
for(movie in movies.sort().reverse()) {
    console.log(movies[movie]);
}
//STEP 10
var movies = [];
var leastFavMovies = ["Her", "The Cell", "Lucy"];
for(var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
movies.push("Total Recall");
movies.push("Starship Troopers");
var movies = movies.concat(leastFavMovies);
console.log("Last element in movies array: " + movies[movies.length-1]);
