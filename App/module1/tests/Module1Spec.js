///<reference path="../../../Scripts/typings/_allReferences.ts"/>
//test suite grouping
describe('This DEMO app', function () {
    var $service;
    var counter = 0;

    //setup
    beforeEach(function () {
        angular.mock.module('demo');
        inject(function (service) {
            $service = service;
        });

        counter = counter + 1;
    });

    //teardown
    afterEach(function () {
        counter = 0;
    });

    describe('suite for controllers', function () {
        //matchers
        it('should return a string result from $service.callMePlease so we can do some fun expects', function () {
            var result = $service.callMePlease('one');

            expect(result).not.toBe('');
            expect(result).not.toBeNull();
            expect(result).toContain('one');
            expect(result.length > 0).toBeTruthy();
            expect(result.length == 0).toBeFalsy();
            expect(result.length).toBeGreaterThan(0);
            expect(result.length).not.toBeLessThan(1);
            expect($service.throwAnExceptionPlease).toThrow();
        });
    });

    //spies
    it('should make 2 calls to callMePlease with 2 difference parameters', function () {
        spyOn($service, 'callMePlease');

        $service.callMePlease('one');
        $service.callMePlease('two');

        expect($service.callMePlease).toHaveBeenCalled();
        expect($service.callMePlease).toHaveBeenCalledWith('one');
        expect($service.callMePlease).not.toHaveBeenCalledWith('ssdfsdfone');

        expect($service.callMePlease.calls.count()).toBeGreaterThan(0);
        expect($service.callMePlease.calls.count()).toEqual(2);
        expect($service.callMePlease.calls.any()).toBeTruthy();
        expect($service.callMePlease.calls.first().object).toEqual($service);
        expect($service.callMePlease.calls.first().args).toEqual(['one']);

        expect($service.callMePlease.calls.mostRecent().object).toEqual($service);
        expect($service.callMePlease.calls.mostRecent().args).toEqual(['two']);

        $service.callMePlease.calls.reset();

        expect($service.callMePlease.calls.count()).toBeLessThan(1);
    });

    it('can call a method and have it return a specific value', function () {
        var _return = 'INTERCEPTION!';
        spyOn($service, 'callMePlease').and.returnValue(_return);

        var x = $service.callMePlease('one');

        expect(x).toMatch(_return);
    });

    it('can call a method and have the spy delegate to the supplied function', function () {
        spyOn($service, 'callMePlease').and.callFake(function (arg1) {
            return arg1;
        });

        var x = $service.callMePlease('three');

        expect($service.callMePlease).toHaveBeenCalled();
        expect($service.callMePlease).toHaveBeenCalledWith('three');
        expect($service.callMePlease).toHaveBeenCalledWith(jasmine.any(String));
        expect(x).toEqual('three');
        expect(x).toEqual(jasmine.any(String));
    });

    it('should have a counter of 1', function () {
        expect(counter).toBe(1);
    });

    it('should not have a counter of 0', function () {
        expect(counter).not.toBe(0);
    });

    it('should not have a counter of X', function () {
        expect(counter).not.toBe('y');
    });
});
