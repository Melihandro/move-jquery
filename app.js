var main = function() {
  $(function() {
    var cities = [
      "Istanbul",
      "Ankara",
      "Warsaw",
      "Krakow",
      "Berlin",
      "Paris",
      "Rome",
      "Madrid",
      "London",
      "Prague",
      "Budapest",
      "Moscow",
      "Talinn",
      "Vilnius",
      "Zurich",
      "Vienna",
      "Sofia",
      "Bucharest",
      "Kiev",
      "Almaty",
      "Wahington",
      "Newyork"
    ];
    $("#search").autocomplete({ source: cities});
  });
};
 
$(document).ready(main);