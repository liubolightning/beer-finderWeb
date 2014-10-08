'user strict';

angular.module('beerMeApp')
	.controller('userPageCtrl',function($scope, $stateParams, $location, $window, userPageService, recommendationsRequest, locationService){

		$scope.userName = localStorage.getItem('userName');
		$scope.goToRecommendations = function(){
		  $location.path('/'+ localStorage.userName + '/recommendations');
		}
		userPageService.getLikesFromDatabase($stateParams.user, function(results) {
			console.log('the results are :',results)
			$scope.userLikes = results;
		})

		locationService.getLocation(locationService.setPosition, locationService.handleError, 120000);

		$scope.clicked = recommendationsRequest.clicked

	})