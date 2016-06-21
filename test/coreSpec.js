'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  
  beforeEach(module('watchApp'));

  it('should test loginCtrl', function() {
    //spec body
    expect(watchApp.userCtrl).not.toBe(null);
  });

  it('should test loginCtrl', inject(function($controller, $rootScope) {
    //spec body
     var $scope = $rootScope.$new();

    
    var ctrl = $controller('loginCtrl', {$scope: $scope});
    expect($scope.showNotification).toBe(false);
  }));


});