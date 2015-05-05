describe('This 3rd DEMO app', function () {
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

    it('should have a counter of 1', function () {
        expect(counter).toBe(1);
        expect(counter).not.toMatch(2);
    });
    
});