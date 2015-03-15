'use strict';

describe('Controller: EventController', function () {

  // load the controller's module
  beforeEach(module('allosoinsWebClientApp'));

  var EventController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventController = $controller('EventController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
