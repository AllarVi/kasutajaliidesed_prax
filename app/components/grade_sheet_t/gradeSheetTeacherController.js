app.controller('gradeSheetTeacherController', ['$scope', gradeSheetTeacherController]);

function gradeSheetTeacherController($scope) {
    $scope.module_title = 'Kasutajaliidesed - Rühm A';

    var firstnames = ['Allar', 'Erko', 'Mari', 'Max', 'Teele'];
    var lastnames = ['134302', '135066', '134298', '135039'];
    var grades = ['1', '3', '5', '2', '0', 'Hindamata'];
    var id = 1;

    function generateRandomItem(id) {

        var firstname = firstnames[Math.floor(Math.random() * 3)];
        var lastname = lastnames[Math.floor(Math.random() * 3)];
        var birthdate = grades[Math.floor(Math.random() * 6)];
        var balance = grades[Math.floor(Math.random() * 6)];

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

    // add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(id));
        id++;
    };

    // remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        console.log("Row index: " + index);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    };
}

app.directive('clicker', function () {
    function changeButtonColor(event) {
        var selfButton = event.target;
        var selfButtonClasses = selfButton.classList;

        var buttonType = "";

        $(selfButtonClasses).each(function () {
            if (this == "btn-warning") {
                buttonType = "editActive";
                $(selfButton).removeClass("btn-warning");
                $(selfButton).addClass("btn-success");
            } else if (this == "btn-success") {
                buttonType = "editInactive";
                $(selfButton).removeClass("btn-success");
                $(selfButton).addClass("btn-warning");
            }
        });

        return buttonType;
    }

    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: true,
        template: '<div ng-click="editItem($event, row)" ng-transclude></div>',
        link: function (scope, element, doc) {
            scope.editItem = function (event, row) {
                // Change the color of editItem button when clicked
                var buttonType = changeButtonColor(event);
                console.log("Button type: " + buttonType);

                var tableRow = $(event.target.closest("tr"));

                console.log("Table row cell count: " + tableRow.context.children.length);

                angular.forEach(tableRow.context.children, function (value, key) {
                    if (key != tableRow.context.children.length - 1) {
                        var tableCell = angular.element($(value)[0]);
                        var currentValue;

                        // Turn edit mode on/off
                        if (buttonType == "editInactive") {
                            currentValue = tableCell.find("input").val();
                            tableCell.html(currentValue);
                        } else if (buttonType == "editActive") {
                            currentValue = tableCell.text();
                            if (currentValue == "Hindamata") {
                                tableCell.html("<input id='currentInput' type='text' placeholder='" + currentValue + "'/><a href='/test.txt' download><button type='button' class='btn btn-primary btn-circle btn-xs'><i class='fa fa-download'></i>\
                            </button></a>");
                            } else {
                                tableCell.html("<input id='currentInput' type='text' value='" + currentValue + "'/>");
                            }
                        }
                        //
                        // console.log("Value id: " + value.id + " Row id: " + row.id);
                        // if (row.id == value.id) {
                        //     var newFirstName = "Allar";
                        //     value.firstName = newFirstName;
                        //     scope.rowCollection.push(value);
                        //     console.log(value.firstName);
                        // }
                    }
                });
            }
        }
    }
});