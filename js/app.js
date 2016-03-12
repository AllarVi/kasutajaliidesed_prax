var app = angular.module("LegsApp", []);

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
