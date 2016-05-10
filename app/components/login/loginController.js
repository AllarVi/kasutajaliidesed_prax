app.controller("loginController", function ($scope, $http) {

    $scope.data = {};

    $scope.student = "student@mail.com";
    $scope.studentPassword = "student";

    $scope.teacher = "teacher@mail.com";
    $scope.teacherPassword = "teacher";

    $scope.emailHint = "E-mail...";
    $scope.passwordHint = "Parool...";
    $scope.loginHint = "Logi sisse";

    $scope.emailFieldEmptyErrorMessage = "Palun sisesta oma email.";
    $scope.passwordFieldEmptyErrorMessage = "Palun sisesta parool.";

    $scope.hideEmailFieldEmptyErrorMessage = function () {
        $scope.submittedEmail = false;
        $scope.loginHint = "Logi sisse";
    };

    $scope.hidePasswordFieldEmptyErrorMessage = function () {
        $scope.submittedPassword = false;
        $scope.loginHint = "Logi sisse";
    };

    $scope.verifyUser = function () {

    };
    // $scope.hideErrorMessages = function () {
    //     $scope.emailFieldEmpty = false;
    //     $scope.passwordFieldEmpty = false;
    // };

    // function to submit the form after all validation has occurred
    $scope.submitForm = function (email, password) {

        console.log("Form submitted...");

        $scope.email = email;
        $scope.password = password;

        $scope.submittedEmail = true;
        $scope.submittedPassword = true;

        // check to make sure the form is completely valid
        if ($scope.loginForm.$valid && !$scope.loginForm.$pristine) {
            console.log("Login initialized...");

            var req = {
                method: 'POST',
                url: 'http://localhost:8080/api/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    email: email,
                    password: password
                }
            };

            $http(req).then(function (success) {
                console.log("Kasutaja sisse logimine õnnestus!");

                if (success.data.authResponse === 'success') {
                    window.location.href = "../../../app/components/home/home.html?user=" + success.data.email;
                } else {
                    console.log("Vale kasutajanimi või parool!");
                    $scope.emailFieldEmptyErrorMessage = "Vale kasutajanimi või parool!";
                }
            }, function () {
                console.log("Kasutaja sisse logimine ebaõnnestus!");
            });
        } else {
            $scope.loginHint = "Vigane sisenemine";
        }

    };


});
