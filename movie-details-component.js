(function(){
  var module = angular.module("favMoviesList");
  
  module.component("movieApp",{
    templateUrl:'movie-details-component.html',
    controllerAs: "model",
    $canActivate: function($timeout){
    	$timeout(function(){
    		return true;
    	}1000);
    }
    controller: function(){
    	var model = this;
    	$routerOnActivate: function(next,previous){
    		model.id = next.params.id;
    	}
    }
   
  });
}());