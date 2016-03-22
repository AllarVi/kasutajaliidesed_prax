app.controller("loginController", function ($scope) {

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

    // $scope.hideErrorMessages = function () {
    //     $scope.emailFieldEmpty = false;
    //     $scope.passwordFieldEmpty = false;
    // };

    // function to submit the form after all validation has occurred
    $scope.submitForm = function (email, password) {

        $scope.email = email;
        $scope.password = password;

        $scope.submittedEmail = true;
        $scope.submittedPassword = true;

        // check to make sure the form is completely valid
        if ($scope.loginForm.$valid && !$scope.loginForm.$pristine && ((email == $scope.student && password == $scope.studentPassword) || (email == $scope.teacher && password == $scope.teacherPassword))) {
            window.location.href = "../../../app/components/home/home.html";
        } else {
            $scope.loginHint = "Vigane sisenemine";
        }

    };


});
