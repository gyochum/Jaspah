var gy;
(function (gy) {
    (function (mock) {
        ///<reference path="../../Scripts/typings/_allReferences.ts"/>
        (function (service) {
            'use strict';

            var serviceModule = angular.module('serviceModule', []);

            serviceModule.service('service', function () {
                var _service = {
                    callMe: function () {
                        return 'I have been called';
                    },
                    callMePlease: function (p) {
                        return 'I have been called with param [' + p + '].';
                    },
                    throwAnExceptionPlease: function () {
                        return a + 100;
                    }
                };

                return _service;
            });
        })(mock.service || (mock.service = {}));
        var service = mock.service;
    })(gy.mock || (gy.mock = {}));
    var mock = gy.mock;
})(gy || (gy = {}));
