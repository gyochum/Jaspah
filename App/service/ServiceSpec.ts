///<reference path="../../Scripts/typings/_allReferences.ts"/> 
///<reference path="../service/ServiceModule.ts"/>

describe('service component ', () => {

    var service, injector;

    beforeEach(() => {
        angular.mock.module('serviceModule');
        angular.mock.inject(($injector) => {
            service = $injector.get('service');
        });
    });

    it('should return a path', () => {
        expect(service).not.toBeNull();
    });

    it('should return a string from the callMePlease method', () => {
        expect(service.callMePlease()).not.toBeNull();
    });

});