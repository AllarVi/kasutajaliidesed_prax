app.controller("homeController", ['productService', '$rootScope', '$scope', homeController]);

function homeController(productService, $rootScope, $scope) {
    $scope.ROLE_STUDENT = "student";
    $scope.ROLE_TEACHER = "teacher";

    $scope.module_title = "Uudised";

    // $scope.role = productService.getProducts();
    $scope.role = "student";

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
}


