
(function(){
  var module =angular.module("favMoviesList",["ngRoute"]);
  
  module.config(function($routeProvider){
    $routeProvider
      .when("/list",{
        template:"<movies-list></movies-list>"
      })
      .when("/about",{
        template:"<app-about></app-about>"
      })
      .otherwise({redirectTo:"/list"})
  });
  
  module.component("appAbout",{
    template:"This is about page"
  });
}());