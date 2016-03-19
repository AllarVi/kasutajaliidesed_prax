app.service('studyResultsService', ['$http', '$rootScope', studyResultsService]);

app.controller('studyResultsController', ['$scope', 'studyResultsService', studyResultsController]);

function studyResultsController($scope) {
    $scope.module_title = 'Õppetulemused';

    /* Open one item at a time */
    $scope.oneAtATime = false;
    
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
    
    $scope.addItem = function () {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    /* We hold study results view data here */
    $scope.groups = [];
    
    var studyResultsJSON = [
        {
            subject: "Andmebaasid II",
            contents: [{
                grades: [
                    ["HW1", 2],
                    ["HW2", 3],
                    ["HW3", 5],
                    ["KT1", 4],
                    ["HW4", 1],
                    ["HW5", 4],
                    ["KT2", 3]
                ]
            }]
        },
        {
            subject: "Füüsika I",
            contents: [{
                grades: [
                    ["HW1", 2],
                    ["HW2", 3],
                    ["HW3", 5],
                    ["KT1", 4],
                    ["HW4", 1],
                    ["HW5", 4],
                    ["KT2", 3]
                ]
            }]
        },
        {
            subject: "Kasutajaliidesed",
            contents: [{
                grades: [
                    ["labor1", 5],
                    ["labor2", 5]
                ]
            }]
        }
    ];

    $scope.studyResults = angular.fromJson(studyResultsJSON);
    
    for (var i = 0; i < $scope.studyResults.length; i++) {
        var item = {
            /* subject refers to the title of the subject*/
            title: $scope.studyResults[i].subject,
            /* contents[0] refers to grades */
            content: $scope.studyResults[i].contents[0]
        };
        $scope.groups.push(item);
    }
}

function studyResultsService($http, $rootScope) {
}