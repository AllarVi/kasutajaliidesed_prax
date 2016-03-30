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
            subject: "Kasutajaliidesed",
            contents: [{
                grades: [
                    ["labor1", 5, '30.03.2016', 'Jaagup Irve'],
                    ["labor2", 5, '30.03.2016', 'Jaagup Irve']
                ]
            }]
        },
        {
            subject: "Füüsika I",
            contents: [{
                grades: [
                    ["HW1", 2, '29.03.2016', 'Arvo Mere'],
                    ["HW2", 3, '29.03.2016', 'Arvo Mere'],
                    ["HW3", 5, '29.03.2016', 'Arvo Mere'],
                    ["KT1", 4, '29.03.2016', 'Arvo Mere'],
                    ["HW4", 1, '29.03.2016', 'Arvo Mere'],
                    ["HW5", 4, '29.03.2016', 'Arvo Mere'],
                    ["KT2", 3, '29.03.2016', 'Arvo Mere']
                ]
            }]
        },
        {
            subject: "Andmebaasid II",
            contents: [{
                grades: [
                    ["HW1", 2, '28.03.2016', 'Erki Eessaar'],
                    ["HW2", 3, '28.03.2016', 'Erki Eessaar'],
                    ["HW3", 5, '28.03.2016', 'Erki Eessaar'],
                    ["KT1", 4, '28.03.2016', 'Erki Eessaar'],
                    ["HW4", 1, '28.03.2016', 'Erki Eessaar'],
                    ["HW5", 4, '28.03.2016', 'Erki Eessaar'],
                    ["KT2", 3, '28.03.2016', 'Erki Eessaar']
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