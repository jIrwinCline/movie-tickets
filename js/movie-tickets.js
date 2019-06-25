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

function Film(name, premier, image) {
  this.name = name;
  this.premier = premier;
  this.image = image;
}

Movies.prototype.addfilm = function(film) {
  film.id = this.assignID();
  this.films.push(film);
}

Movies.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
}
function displayMovies(showing) {
  var movieChoices = $("#movieChoices div");
  var htmlForMovies = "";

  showing.films.forEach(function(movie) {
    htmlForMovies += "<div class='col-md-4' " + movie.id + ">" +
    "<div class='card' style='width: 18rem;'> <img id=" + movie.id + " class='card-img-top' src=" + movie.image + " alt=''> <div class='card-body'> <h5 class='card-title'>" + movie.name + "</h5> </div></div></div>";
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

function showTicket(ticket, time, age) {
  $("#ticket-text").text('');
  $(".ticket").show();
  $("#ticket-title").text(ticket.film.name);
  if(ticket.film.premier){
    $("#ticket-text").append("Premier Showing" + "<br>");
  }
  $("#ticket-text").append(" For age: " + age + "<br>");
  $("#ticket-text").append(" Cost: " + "$" + ticket.cost);
  $("#ticket-footer").text("Showtime: " + time);
};
