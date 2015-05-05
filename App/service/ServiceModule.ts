///<reference path="../../Scripts/typings/_allReferences.ts"/>
module gy.mock.service {
    'use strict';

    var serviceModule = angular.module('serviceModule', []);

    serviceModule.service('service', () => {
        var _service = {
            callMe: () => {
                return 'I have been called';
            },
            callMePlease: (p: string) => {
                return 'I have been called with param [' + p + '].';
            },
            throwAnExceptionPlease: () => {
                return a + 100;
            }
        };

        return _service;
    });
}