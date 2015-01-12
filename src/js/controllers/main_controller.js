angular.module('NapKeeper.controllers.Main', [])

.controller('MainController', function($scope, Facebook){

	$scope.clock = $(".clock").FlipClock({'autoStart' : false });

	$scope.startClock = function(){
		$scope.clock.start(function(){});
	}

	$scope.stopClock = function(){
		$scope.clock.stop(function(){});
	}

	$scope.FBShare = function(){
		FB.ui({
		  method: 'share_open_graph',
		  action_type: 'og.likes',
		  action_properties: JSON.stringify({
		      object:'https://developers.facebook.com/docs/',
		  })
		}, function(response){});
	}
  
});