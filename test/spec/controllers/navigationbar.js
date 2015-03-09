'use strict';

describe('Controller: NavigationBarController', function () {

  // load the controller's module
  beforeEach(module('allosoinsWebClientApp'));

  var NavigationBarController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavigationBarController = $controller('NavigationBarController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
