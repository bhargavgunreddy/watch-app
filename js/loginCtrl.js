/* angular modules */


watchApp.controller('loginCtrl', function PhoneListController($scope, sharingService, $rootScope, $http) {
  var pcolor = "brown";


	$scope.handleClick = function(param){

	 
	        $http({
			  method: 'GET',
			  url: '/api/getWatches/'+ param
			}).then(function successCallback(response) {

				$scope.resp = response;
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			});
	}
 
  $scope.userName = "";
  $scope.password = "";
  $scope.showNotification = false;

  	$scope.showAlertFlag = false;  
  // Define event handler to handle login
  $scope.handleLogin = function(event){
  	console.log(" inside handleLogin funct: ->");

  	if($scope.userName && $scope.password){

		//$scope.callBroadCast("key", {key: "bhargav"});


		$scope.$emit('parallel', $scope.userName);

		sharingService.send("parallel", {key: "parallel"});
  		//$rootScope.$broadcast('changeUserbc', $scope.userName);
  		//sharingService.setData($scope.userName);
  		//$rootScope.sessionUserName = $scope.userName;
  		
  		$scope.showNotification = false;  		
 		$http({
		  method: 'POST',
		  url: '/api/insertWatches'
		}).then(function successCallback(response) {

			$scope.resp = response;
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		});
		$scope.showAlertFlag = false;
  	}else{
  		$scope.showAlertFlag = true;
		$scope.showNotification = true;  		
  	}

  };
    
});