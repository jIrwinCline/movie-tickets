//-----------Business Logic------------------

function Ticket(age, time, film) {
  this.age = age;
  this.time = time;
  this.cost = 12;
  this.film = film;
}

function Movies() {
  this.films = [];
  this.currentID = 0;
}

function Film(name, premier) {
  this.name = name;
  this.premier = premier;
}

Movies.prototype.addfilm = function(film) {
  film.id = this.assignID();
  this.films.push(film);
}

Movies.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
}
//--------functions----------------

function displayMovies(showing) {
  var movieChoices = $("#movieChoices div");
  var htmlForMovies = "";

  showing.films.forEach(function(movie) {
    htmlForMovies += "<div class='col-md-3' id=" + movie.id + ">" + movie.name + "</div>";
  });
  movieChoices.html(htmlForMovies);
}

function checkMovieCost(ticket) {
  if(ticket.age >= 55) {
    ticket.cost -= 2;

  }
  if(ticket.time < 1600) {
    ticket.cost -= 2;
  }
  if(ticket.film.premier) {
    ticket.cost += 2;
  }
}
//-------------User Interface------------------
var nowShowing = new Movies;

function makeMovieList() {
  var ourFilms =[["Toy Story 4", true],
  ["Avenger's: Endgame", false],
  ["Child's Play", true],
  ["Alladin", true]];

  ourFilms.forEach(function(movie) {
    var newMovie = new Film(movie[0], movie[1]);
    nowShowing.addfilm(newMovie);
  });
}


$(document).ready(function(){
  var currentTicket = new Ticket;

  makeMovieList();
  displayMovies(nowShowing);

  $("#movieChoices").on( "click", "li", function() {
    var chosenMovieID = this.id;
    var film = nowShowing.films[chosenMovieID - 1];
    currentTicket.film = film;
  });


  $("#input").submit(function (event) {
    event.preventDefault();
    var age = $("#age").val();
    var time = $("#time").val();
    currentTicket.age = age;
    currentTicket.time = time;
    console.log(currentTicket);
    checkMovieCost(currentTicket);
    $(".output h2").text(currentTicket.cost + '$$$');
    console.log(currentTicket.cost);
  });

});
