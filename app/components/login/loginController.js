app.controller("loginController", function ($scope, $location) {

    $scope.student = "student@mail.com";
    $scope.studentPassword = "student";

    $scope.teacher = "teacher@mail.com";
    $scope.teacherPassword = "teacher";

    $scope.emailHint = "E-mail...";
    $scope.passwordHint = "Parool...";
    $scope.emailFieldEmpty = false;
    $scope.passwordFieldEmpty = false;

    $scope.hideErrorMessages = function () {
        $scope.emailFieldEmpty = false;
        $scope.passwordFieldEmpty = false;
    };

    // function to submit the form after all validation has occurred
    $scope.submitForm = function (email, password) {

        $scope.email = email;
        $scope.password = password;

        // check to make sure the form is completely valid
        if ($scope.loginForm.$valid && !$scope.loginForm.$pristine && ((email == $scope.student && password == $scope.studentPassword) || (email == $scope.teacher && password == $scope.teacherPassword))) {
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
            alert("Kasutajanimi või parool on vale.");
        }

    };


});
