var app = angular.module("LegsApp", ['ngRoute']);

app.config(
    ["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/list", {templateUrl: 'list.html'})
            .when("/form", {templateUrl: 'form.html'})
            .otherwise({redirectTo: '/list'});
    }]
);

app.controller("dogEmailController", function ($scope) {
    $scope.doglist = [
        {name: 'Fido', email: 'fido@example.com'},
        {name: 'Muri', email: 'muri@example.com'}
    ];
    $scope.dog = {};

    $scope.addDog = function () {
        $scope.doglist.push($scope.dog);
        $scope.dog = {};
    };
});

app.controller("TabsController", function () {
    this.tabNumber = 2;

    this.SetTab = function (targetTabNumber) {
        this.tabNumber = targetTabNumber;
    };

    this.IsSet = function (targetTabNumber) {
        return this.tabNumber == targetTabNumber;
    }

});

app.controller("LegsController", function () {
    this.formitem = {};

    this.items = [
        {name: "Karu", legs: 4},
        {name: "Kana", legs: 2}
    ];

    this.AddItem = function () {
        this.items.push(this.formitem);
    }
});
