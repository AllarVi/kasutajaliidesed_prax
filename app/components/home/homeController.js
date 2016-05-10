app.controller("homeController", ['$rootScope', '$scope', '$routeParams', '$http', homeController]);

var getUserName = function () {
    var url = window.location.href;
    var parts = url.split("/");
    var firstUrlTerm = parts[7];
    var firstTermParts = firstUrlTerm.split("?");
    var firstTermValue = firstTermParts[1];
    var userPair = firstTermValue.split("=");
    var userName = userPair[1];

    // userName = userName.slice(0, -1);
    return userName;
};

function homeController($rootScope, $scope, $routeParams, $http) {
    $scope.ROLE_STUDENT = "student";
    $scope.ROLE_TEACHER = "teacher";

    $scope.module_title = "Uudised";

    var userName = getUserName();
    console.log("Logged in as: " + userName);

    var req = {
        method: 'GET',
        url: 'http://localhost:8080/api/user?email=' + userName,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    $http(req).then(function (success) {
        console.log("Kasutaja andmete päring õnnestus!");

        if (!success.data.role) {
            window.location.href = "../../../app/components/login/login.html";
        }
        console.log(success.data.role);
        $scope.role = success.data.role;

        $scope.isRoleTeacher = function () {
            return $scope.role == $scope.ROLE_TEACHER;

        };

        $scope.isRoleStudent = function () {
            return $scope.role == $scope.ROLE_STUDENT;

        };

        $scope.changeView = function () {
            if ($scope.role == "student") {
                $scope.role = "teacher";
            } else {
                $scope.role = "student";
            }
        };
    }, function () {
        console.log("Kasutaja andmete päring ebaõnnestus!");
    });

    $scope.logout = function () {
        var req = {
            method: 'POST',
            url: 'http://localhost:8080/api/logout',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                userEmail: userName
            }
        };

        $http(req).then(function (success) {
            console.log("Kasutaja välja logimine õnnestus!");

            window.location.href = "../../../app/components/login/login.html";
        }, function () {
            console.log("Kasutaja välja logimine ebaõnnestus!");
        });
    }
}


