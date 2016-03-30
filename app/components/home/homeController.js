app.controller("homeController", ['$rootScope', '$scope', homeController]);

function homeController($rootScope, $scope) {
    $scope.ROLE_STUDENT = "student";
    $scope.ROLE_TEACHER = "teacher";

    $scope.module_title = "Uudised";

    $scope.role = "student";
    
    $scope.isRoleTeacher = function () {
        return $scope.role == $scope.ROLE_TEACHER;
        
    };

    $scope.isRoleStudent = function () {
        return $scope.role == $scope.ROLE_STUDENT;
        
    };
}


