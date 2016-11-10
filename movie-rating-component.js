(function() {
  var module = angular.module("favMoviesList");

  module.component("movieRating", {
    templateUrl: "movie-rating-component.html",

    bindings: {
      value: "<"
    },
    controllerAs: "model",
    controller: function() {
      var model = this;
      model.$onInit = function() {
        model.entries = new Array(model.value);
      };
  model.$onChanges = function() {
        model.entries = new Array(model.value);
      };
    }

  });


}());