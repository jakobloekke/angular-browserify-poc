'use strict';

var list_directive = function () {
    return {
        restrict: 'E',
        template: require('./list.html'),
        controller: function ($scope, ListDataService) {
            $scope.list = ListDataService;
        },
        link: function (scope, elem, attr) {

        }
    }
};

module.exports = list_directive;