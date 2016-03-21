var app = angular.module("ois", ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngAnimate', 'ngTouch', 'smart-table'])
    .constant('ROLE_STUDENT', 'student')
    .constant('ROLE_TEACHER', 'teacher');

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

    // route for the dashboard module
        .when('/', {
            templateUrl: '../../../app/components/dashboard/dashboard.html',
            controller: 'homeController'
        })

        // route for the study results module
        .when('/study_results', {
            templateUrl: '../../../app/components/study_results/study_results.html',
            controller: 'studyResultsController'
        })
        // route for the study results module
        .when('/grade_sheet_t', {
            templateUrl: '../../../app/components/grade_sheet_t/grade_sheet_t.html',
            controller: 'gradeSheetTeacherController'
        })
});