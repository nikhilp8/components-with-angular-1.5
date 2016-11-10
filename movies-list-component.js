(function() {
  var module = angular.module("favMoviesList");

  function fetchMovies($http) {
    return $http.get("movies.json")
      .then(function(response) {
        return response.data;
      });
  }

  function controller($http) {
    var model = this;

    model.$onInit = function() {
      fetchMovies($http).then(function(movies) {
        model.movies = movies;
      });
                         
    };
    
    model.upRating = function(x){
      if(x.rating<5)
        x.rating +=1;
    }
    model.downRating = function(x){
      if(x.rating>1)
        x.rating -=1;
    }
  }

  module.component("moviesList", {
    templateUrl: "movies-list-component.html",
    controllerAs: "model",
    controller: ["$http", controller]

  });
}());