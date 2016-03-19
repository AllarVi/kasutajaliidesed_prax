app.service('studyResultsService', ['$http', '$rootScope', studyResultsService]);

app.controller('studyResultsController', ['$scope', 'studyResultsService', studyResultsController]);

function studyResultsController($scope) {
    $scope.module_title = 'Õppetulemused';

    /* Open one item at a time */
    $scope.oneAtATime = false;

    $scope.groups = [];

    $scope.studyResults = [
        {subject: "Andmebaasid II", content: "Hinded"},
        {subject: "Kasutajaliidesed", content: "Hinded"},
        {subject: "Matemaatiline analüüs II", content: "Hinded"}
    ];

    for (var i = 0; i < $scope.studyResults.length; i++) {
        var item = {
            title: $scope.studyResults[i].subject,
            content: $scope.studyResults[i].content
        };
        $scope.groups.push(item);
    }

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function () {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
}

function studyResultsService($http, $rootScope) {
}