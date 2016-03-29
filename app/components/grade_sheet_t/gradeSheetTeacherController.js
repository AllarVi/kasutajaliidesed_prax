app.controller('gradeSheetTeacherController', ['$scope', gradeSheetTeacherController]);

function gradeSheetTeacherController($scope) {
    $scope.module_title = 'Kasutajaliidesed - Rühm A';

    var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
    var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
    var dates = ['1', '3', '5', '2'];
    var id = 1;

    function generateRandomItem(id) {

        var firstname = firstnames[Math.floor(Math.random() * 3)];
        var lastname = lastnames[Math.floor(Math.random() * 3)];
        var birthdate = dates[Math.floor(Math.random() * 3)];
        var balance = Math.floor(Math.random() * 2000);

        return {
            id: id,
            firstName: firstname,
            lastName: lastname,
            birthDate: birthdate,
            // birthDate: new Date(birthdate),
            balance: balance
        }
    }

    $scope.rowCollection = [];

    for (id; id < 5; id++) {
        $scope.rowCollection.push(generateRandomItem(id));
    }

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(id));
        id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        console.log("Row index: " + index);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    };
}

app.directive('clicker', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: true,
        template: '<div ng-click="editItem($event, row)" ng-transclude></div>',
        link: function (scope, element, doc) {
            scope.editItem = function (event, row) {
                var tableRow = $(event.target.closest("tr"));

                console.log(tableRow.find("#removeItem"));

                console.log(tableRow.context.children.length);

                angular.forEach(tableRow.context.children, function (value, key) {
                    if (key != tableRow.context.children.length - 1) {
                        var tableCell = angular.element($(value)[0]);

                        var currentValue = tableCell.text();
                        console.log(key);
                        console.log(tableCell.text());
                        tableCell.html("<input id='currentInput' type='text' value='" + currentValue + "'/>");
                        // if (row.id == value.id) {
                        //     var newFirstName = "Allar";
                        //     value.firstName = newFirstName;
                        //     scope.rowCollection.push(value);
                        //     console.log(value.firstName);
                        // }
                    }
                });

                // element[0].style.backgroundColor = 'red';
                // angular.element(element[0]).find('a').addClass('magic');
            }
        }
    }
});