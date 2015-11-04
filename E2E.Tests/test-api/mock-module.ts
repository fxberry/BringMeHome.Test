class MockModule {
    constructor() { }

    public mockGeoLocation(latitude: number, longitude: number, address:string): MockModule {
        browser.addMockModule('mock-module',(latitude, longitude, address) => {
            var decoractor = ($q) => {
                var defer = $q.defer();

                var coordinates = {
                    Accuracy: 73966,
                    Altitude: null,
                    AltitudeAccuracy: null,
                    Heading: null,
                    Latitude: latitude,
                    Longitude: longitude,
                    Speed: null
                };


                var position = {
                    TimeStamp: 1430579685549,
                    Coordinates: coordinates
                };

                defer.resolve(position);
                return defer.promise;
            }

            angular.module('mock-module', []).
                config(['$provide', $provide => {
                $provide.decorator('GeoLocation', [
                    '$q',
                    $q => () => decoractor($q)
                ]);
            }])
                .run(['$injector', $injector => {
                var locations = $injector.get('TargetAddress');
                locations.SetAddress('home', address);
            }
            ]);
        }, latitude, longitude, address);
        return this;
    }
}

export = MockModule