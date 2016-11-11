(function(){
  var module = angular.module("favMoviesList");
  
  module.component("movieApp",{
    templateUrl:"movie-app-component.html",
    $routeConfig:[
      {
        path:"/list",
        component:"movieList",
        name:"List"
      },
      {
        path:"/about",
        component:"appAbout",
        name:"About"
      },
      {
        path:"/**",
        redirectTo:["List"]
      }]
  });
}());