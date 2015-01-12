angular.module('NapKeeper', [
  'ngRoute',
  'mobile-angular-ui',
  'NapKeeper.controllers.Main',
  'facebook'
])

.config(function($routeProvider, FacebookProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
  FacebookProvider.init('792217177519868');
});