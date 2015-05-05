///<reference path="../Scripts/typings/_allReferences.ts"/>

var app = angular.module('demo', []);

app.factory('service', () => {
    var jasPahService = {
        callMePlease: (arg1:string):string => {
            return 'callMePlease with arg [ ' + arg1 + ' ]';
        },
        throwAnExceptionPlease: () => {
            return a + 100;
        }
    };

    return jasPahService;
});