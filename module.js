
(function(){
  var module =angular.module('favMoviesList',['ngComponentRouter']);


  
  module.value("$routerRootComponent","movieApp");

  
  module.component("appAbout",{
    template:"This is about page"
  });
}());