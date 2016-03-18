app.controller("homeController", function ($scope, ROLE_STUDENT, ROLE_TEACHER) {
    $scope.ROLE_STUDENT = ROLE_STUDENT;
    $scope.ROLE_TEACHER = ROLE_TEACHER;

    this.getRole = function () {
        /* TODO: Use service to determine user role */
        return "student";
    };
});
