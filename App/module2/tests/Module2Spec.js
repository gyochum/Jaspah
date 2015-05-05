///<reference path="../../../Scripts/typings/_allReferences.ts"/>
//test suite grouping
describe('This 2nd DEMO app', function () {
    var $service;
    var counter = 0;

    //setup
    beforeEach(function () {
        angular.mock.module('demo');
        inject(function (service) {
            $service = service;
        });

        counter = counter + 2;
    });

    //teardown
    afterEach(function () {
        counter = 0;
    });

    it('should have a counter of 1', function () {
        expect(counter).toBe(1);
        expect(counter).not.toMatch(2);
    });

    it('should not have a counter of 0', function () {
        expect(counter).not.toBe(0);
    });

    it('should not have a counter of X', function () {
        expect(counter).not.toBe('y');
    });
});
