app.controller("registerController", function ($scope, $location) {

    $scope.emeil = "E-mail...";
    $scope.parool = "Parool...";
    $scope.parooluuesti = "Parool uuesti...";
    $scope.eesnimi = "Eesnimi...";
    $scope.perekonnanimi = "Perekonnanimi...";

    $scope.login = function () {
        window.location.href = "../../../app/components/home/home.html";
        //$location.url("home.html");
    };
});
