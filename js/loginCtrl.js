/* angular modules */


watchApp.controller('loginCtrl', function PhoneListController($scope, sharingService, $rootScope, $http) {
  var pcolor = "brown";


	$scope.handleClick = function(param){
			console.log(param);
	}
 
  	$scope.userName = "";
  	$scope.password = "";
  	$scope.showNotification = false;
	$scope.showAlertFlag = false;  

  // Define event handler to handle login
  $scope.handleLogin = function(){
  	console.log(" inside handleLogin funct: ->", $scope.userName , $scope.password);

  	if($scope.userName && $scope.password){
		$scope.showNotification = false;  		
		$scope.showAlertFlag = false;
 		
		$http({
			  method: 'POST',
			  url: '/api/checkLogin/',
			  data: {
			  			'uname': $scope.userName.toString(), 
			  			'pwd': $scope.password.toString()
			  		}
			}).then(function successCallback(response) {
				//console.log(resposne);
				$scope.$emit("startUserSession", response.data);
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    //console.log("error occured");
		    	$scope.$emit("clearSession", null);
			});
		
  	}else{
  		$scope.showAlertFlag = true;
		$scope.showNotification = true;  		
  	}

  };
    
});


