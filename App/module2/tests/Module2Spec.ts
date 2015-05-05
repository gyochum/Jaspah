///<reference path="../../../Scripts/typings/_allReferences.ts"/>

//test suite grouping
describe('This 2nd DEMO app', () => {
    var $service;
    var counter = 0;

    //setup
    beforeEach(() => {
        angular.mock.module('demo');
        inject((service) => {
            $service = service;
        });

        counter = counter + 2;
    });
    
    //teardown
    afterEach(() => {
        counter = 0;
    });

    it('should have a counter of 1', () => {
        expect(counter).toBe(1);
        expect(counter).not.toMatch(2);
    });

    it('should not have a counter of 0', () => {
        expect(counter).not.toBe(0);
    });

    it('should not have a counter of X', () => {
        expect(counter).not.toBe('y');
    });

}); 