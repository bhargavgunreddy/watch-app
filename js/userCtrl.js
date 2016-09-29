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


  $rootScope.$on('startUserSession', function (event, arg) { 
    $scope.sessionStarted = true;
    this.startSessionCounter();
    $scope.sessionUserData = arg[0];
    $scope.sessionUserName = $scope.sessionUserData.uname;
    console.log("starting session for -->", arg);
  });

  $scope.endSession = function(){
    $scope.sessionStarted = false;
    //this.startSessionCounter();
    $scope.sessionUserData = null;
  }


  $scope.startSessionCounter = function(){
      var counter = 1000;
      setTimeout(function(){
        if(counter > 0)
          counter -= 1;
        else
          $scope.endSession();
        
      }, 1000);
  }

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