///<reference path="../../Scripts/typings/_allReferences.ts"/>
///<reference path="../service/ServiceModule.ts"/>
describe('service component ', function () {
    var service, injector;

    beforeEach(function () {
        angular.mock.module('serviceModule');
        angular.mock.inject(function ($injector) {
            service = $injector.get('service');
        });
    });

    it('should return a path', function () {
        expect(service).not.toBeNull();
    });

    it('should return a string from the callMePlease method', function () {
        expect(service.callMePlease()).not.toBeNull();
    });
});
