
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//-----------Business Logic------------------


//--------functions----------------



//-------------User Interface------------------
var nowShowing = new Movies;

function makeMovieList() {
  var ourFilms =[["Toy Story 4", true, "img/toystory4.jpg"],
  ["Avenger's: Endgame", false, "img/endgame.jpg"],
  ["Child's Play", true, "img/childsplay.jpg"],
  ["Alladin", true, "img/alladin.jpg"],
  ["Godzilla", true, "img/godzilla.jpg"],
  ["Dark Phoenix", true, "img/darkphoenix.jpg"]];

  ourFilms.forEach(function(movie) {
    var newMovie = new Film(movie[0], movie[1], movie[2]);
    nowShowing.addfilm(newMovie);
  });
}

$(document).ready(function(){
  var currentTicket = new Ticket;

  makeMovieList();
  displayMovies(nowShowing);

  $("#movieChoices").on( "click", "img", function() {
    $(".card img").removeClass("highlight");
    $(this).addClass("highlight");
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
    checkMovieCost(currentTicket);
    $(".output").text(currentTicket.cost + '$$$');
    showTicket(currentTicket, time, age);
    currentTicket.cost = 12;
  });
});
