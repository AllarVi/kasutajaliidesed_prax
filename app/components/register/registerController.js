app.controller("registerController", function ($scope, $location) {

    $scope.emailHint = "E-mail...";
    $scope.passwordHint = "Parool...";
    $scope.passwordAgainHint = "Parool uuesti...";
    $scope.firstnameHint = "Eesnimi...";
    $scope.lastnameHint = "Perekonnanimi...";

    $scope.submitForm = function (email, password, passwordAgain, firstname, lastname) {

        $scope.email = email;
        $scope.password = password;
        $scope.passwordAgain = passwordAgain;
        $scope.firstname = firstname;
        $scope.lastname = lastname;

        // check to make sure the form is completely valid
        if ($scope.registerForm.$valid && !$scope.registerForm.$pristine && email != undefined && password != undefined && passwordAgain != undefined && firstname != undefined && lastname != undefined) {
            window.location.href = "../../../app/components/home/home.html";
        } else if ((email == undefined || email == "") && (password == undefined || password == "")) { // condition to display both missing email and password error
            $scope.emailFieldEmpty = true;
            $scope.emailFieldEmptyErrorMessage = "Palun sisesta oma email.";
            $scope.passwordFieldEmpty = true;
            $scope.passwordFieldEmptyErrorMessage = "Palun sisesta oma parool.";
        } else if ((email == undefined || email == "") && password != "") { // condition to display missing email error
            $scope.emailFieldEmpty = true;
            $scope.emailFieldEmptyErrorMessage = "Palun sisesta oma email.";
        } else if ((password == undefined || password == "") && email != "") { // condition to display missing password error
            $scope.passwordFieldEmpty = true;
            $scope.passwordFieldEmptyErrorMessage = "Palun sisesta oma parool.";
        } else {
            $scope.failedLogin = "Kasutajanimi või parool vale"
        }
    };
});
