app.controller("registerController", function ($scope, $location) {

    $scope.emailHint = "E-mail...";
    $scope.passwordHint = "Parool...";
    $scope.passwordAgainHint = "Parool uuesti...";
    $scope.registerHint = "Registreeru";

    $scope.emailFieldEmptyErrorMessage = "Palun sisesta oma email.";
    $scope.passwordFieldEmptyErrorMessage = "Palun sisesta oma parool.";
    $scope.passwordAgainFieldEmptyErrorMessage = "Palun sisesta oma parool uuesti.";
    $scope.passwordMismatchErrorMessage = "Sisestatud paroolid ei ole ühesugused.";

    $scope.hideEmailFieldEmptyErrorMessage = function () {
        $scope.submittedEmail = false;
        $scope.registerHint = "Registreeru";
    };

    $scope.hidePasswordFieldEmptyErrorMessage = function () {
        $scope.submittedPassword = false;
        $scope.registerHint = "Registreeru";
    };

    $scope.hidePasswordAgainFieldEmptyErrorMessage = function () {
        $scope.submittedPasswordAgain = false;
        $scope.registerHint = "Registreeru";
    };


    $scope.submitForm = function (email, password, passwordAgain) {

        $scope.email = email;
        $scope.password = password;
        $scope.passwordAgain = passwordAgain;
        $scope.submittedEmail = true;
        $scope.submittedPassword = true;
        $scope.submittedPasswordAgain = true;

        // check to make sure the form is completely valid
        if ($scope.registerForm.$valid && !$scope.registerForm.$pristine &&
            (email != undefined || email == '') &&
            password != undefined &&
            passwordAgain != undefined &&
            password == passwordAgain) {
            window.location.href = "../../../app/components/home/home.html";
        } else {
            $scope.registerHint = "Registreerumine ebaõnnestus";
        }
    };
});
