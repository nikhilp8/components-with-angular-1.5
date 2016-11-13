(function(){
  var module = angular.module("favMoviesList");
  
  module.component("movieApp",{
    templateUrl:'movie-app-component.html',
    $routeConfig:[
      { path:'/list', component:'movieList',name:'List'},
      { path:'/about',component:'appAbout',name:'About'},
      { path:"/details/:id",component:"movieDetails",name:"Details"},
      { path:'/**', redirectTo:['List'] }]
  });
}());