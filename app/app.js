var app = angular.module("ois", ['ngRoute'])
    .constant('ROLE_STUDENT', 'student')
    .constant('ROLE_TEACHER', 'teacher');

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

    // route for the dashboard module
        .when('/', {
            templateUrl : '../../../app/components/dashboard/dashboard.html',
            controller  : 'homeController'
        })

    // route for the study results module
        .when('/study_results', {
            templateUrl: '../../../app/components/study_results/study_results.html',
            controller: 'studyResultsController'
        })
});