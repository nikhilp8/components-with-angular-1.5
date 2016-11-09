(function(){
  var module = angular.module("favMoviesList");
  
  module.component("moviesList",{
    templateUrl:"movies-list-component.html",
    controllerAs:"model",
    controller: function(){
      var model = this;
      model.message="helooo from controller";
      
      model.change = function(){
        model.msg="Howdy mate";
      };
    }
  });
   
}());