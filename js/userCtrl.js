watchApp.controller('userCtrl', function UserController($scope, sharingService, $rootScope) {
  
 // Define variable to be used
  $scope.userName = "";
  //$scope.sessionUserName = "";
  $scope.wishList = [];
  $scope.cartItems = [];

  $rootScope.$on('changeUser', function (event, arg) { 
    $scope.userName = 'got your ' + arg;
    console.log("-got your ->", arg);
  });


  $scope.$on("changeUser", function(event, args){
    console.log(args, "<-keys-");
  
  });
  //sharingService.setData("bhargav");
  // Define event handler to handle login
  $scope.updateCart = function(event){
  	console.log(" inside updateCart funct: ->");
  	
  };

  $scope.callBroadCast = function(msg, data){
      $rootScope.$broadcast(msg, data);
  };
    
});