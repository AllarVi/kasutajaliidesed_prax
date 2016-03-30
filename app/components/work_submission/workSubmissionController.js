app.service('workSubmissionService', ['$http', '$rootScope', workSubmissionService]);

app.controller('workSubmissionController', ['$scope', 'workSubmissionService', workSubmissionController]);

function workSubmissionController($scope) {
    $scope.module_title = 'Tööde esitamine';

    $scope.reset = function () {
        //    TODO: Reset form to default
    }
}

app.directive('ngConfirmClick', [
    function () {
        return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Oled kindel?";
                var clickAction = attr.confirmedClick;
                element.bind('click', function (event) {
                    if (window.confirm(msg)) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
    }]);

function workSubmissionService($http, $rootScope) {
}