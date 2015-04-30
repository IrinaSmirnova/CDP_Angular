
describe 'MainCtrl', ->

  httpBackend = null; scope = null; ctrl = null; placesData = null;

  beforeEach(module('foursquareApp'));

  beforeEach(inject ($controller, $rootScope, $httpBackend) ->
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', {$scope: scope})
    placesData = [
      {name: 'place #1'},
      {name: 'place #2'}
    ]

    httpBackend
    .whenJSONP(/\/venues\/search/)
    .respond
      response:
        venues: placesData
  )

  it 'should set places while searching', ->
    scope.place = 'kharkiv';
    scope.category = 'bar';

    scope.search();

    httpBackend.flush();
    expect(scope.places.length).toEqual 2


