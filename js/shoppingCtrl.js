// Linked to menTemplate and womenTemplate
watchApp.controller('shoppingCtrl', function UserController($scope, $rootScope, $http) {
  
 // Define variable to be used
  //$rootScope.sessionUserName = "MY ACCOUNT";
  $scope.userName = "";
  //$scope.sessionUserName = "";
  $scope.watchList = [];
  $scope.cartItems = [];

  /*$rootScope.$on('changeUser', function (event, arg) { 
    $scope.userName = 'got your ' + arg;
    console.log("-cU->", arg);
  });*/

  $scope.$on("parallel", function(event, args){
  	console.log(args, "<-keys-");

  });

  $rootScope.$on('parallel', function (event, arg) { 
    $scope.userName = 'got yours ' + arg;
    console.log("-CUbC->", arg);
  });

  //$rootScope.$broadcast('changeUserbc', $scope.userName);
  // Filter service call
        $http({
		  method: 'GET',
		  url: '/api/getAllWatches'
		}).then(function successCallback(response) {
			//console.log("resp -->", response);
			$scope.watchList = response ? response.data : [];
		    // this callback will be called asynchronously
		    // when the response is available
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		});

  // Define event handler to handle login
  $scope.updateCart = function(event){
  	console.log(" inside updateCart funct: ->");
  	
  };
    

   $scope.handleClick = function(param){
		//console.log("---", param);
		$rootScope.sessionUserName = "YOUR NAME";
		//console.log("---", $rootScope.sessionUserName );
	 // Filter service call
	        $http({
			  method: 'GET',
			  url: '/api/getWatches/'+ param
			}).then(function successCallback(response) {
				//console.log("resp -->", response);
				$scope.watchList = response ? response.data: [];
			    // this callback will be called asynchronously
			    // when the response is available
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			});
			
	};


   $scope.handlePriceClick = function(param){
		//console.log("--price -", param);
	 // Filter service call
	        $http({
			  method: 'GET',
			  url: '/api/getWatchByPrice/'+param
			}).then(function successCallback(response) {
				//console.log("resp -->", response);
				$scope.watchList = response ? response.data: [];
			    // this callback will be called asynchronously
			    // when the response is available
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			});
	};





});
