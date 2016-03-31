app.service('studentGroupsService', ['$http', '$rootScope', studentGroupsService]);

app.controller('studentGroupsController', ['$scope', 'studentGroupsService', studentGroupsController]);

function studentGroupsController($scope) {
    $scope.module_title = 'Tudengite grupid';

    
}

function studentGroupsService($http, $rootScope) {
}