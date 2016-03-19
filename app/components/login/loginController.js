app.controller("loginController", function ($scope, $location) {

    $scope.emeil = "E-mail...";
    $scope.parool = "Parool...";

    $scope.login = function () {
        window.location.href = "../../../app/components/home/home.html";
        //$location.url("home.html");
    };
});
