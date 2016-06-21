//var watchApp = angular.module('watchApp', []);
//var angular = require('angular');

var watchApp = angular.module('watchApp', ['ngRoute'])
				 .config(['$routeProvider', function ($routeProvider) {
				      $routeProvider
				        .when('/brands', {
				          templateUrl: '../views/brandsTemplate.html',
				          controller: 'userCtrl'
				        })
				        .when('/men', {
				          templateUrl: '../views/menTemplate.html',
				          controller: 'shoppingCtrl'
				        })
				        .when('/women', {
				          templateUrl: '../views/womenTemplate.html',
				          controller: 'shoppingCtrl'
				        })
				        .when('/login', {
				          templateUrl: '../views/loginTemplate.html',
				          controller: 'loginCtrl'
				        });
				    }]);



watchApp.factory('sharingService', function($rootScope){
	return {
		send: function(msg, data){
			console.log(msg, "< - - >", data);
			$rootScope.$broadcast(msg, data);
		}
	}
});

watchApp.directive("showAlert", function() {
    return {
        link: function(scope, element, attrs) {
        	console.log("-> ", scope.showAlertFlag);
            //scope.className = scope.showAlertFlag;
            
        },
        template: '<div ng-show = "showAlertFlag"> <h4> Please enter below details</h4></div>'
    }
})

// Define the `PhoneListController` controller on the `phonecatApp` module

