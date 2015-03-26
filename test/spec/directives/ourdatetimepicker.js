'use strict';

describe('Directive: ourDatetimepicker', function () {

  // load the directive's module
  beforeEach(module('allosoinsWebClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<our-datetimepicker></our-datetimepicker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ourDatetimepicker directive');
  }));
});
