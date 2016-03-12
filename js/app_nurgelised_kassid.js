var app = angular.module("CatsApp", []);

app.controller("TabsController", function () {
    // default values
    this.tabNumber = 1;
    this.tabName = "Lisa kass";

    this.getYear = function (type) {
        var date = new Date();
        if (type == 'min') {
            return date.getFullYear() - 50;
        } else if (type == 'max') {
            return date.getFullYear();
        }
    };

    this.SetTab = function (targetTabNumber) {
        this.tabNumber = targetTabNumber;
        if (targetTabNumber == 2) {
            this.tabName = "Nimekiri";
        } else {
            this.tabName = "Lisa kass";
        }
    };

    /**
     * @return {boolean}
     */
    this.IsSet = function (targetTabNumber) {
        return this.tabNumber == targetTabNumber;
    }

});

app.controller("CatsController", function () {
    this.formitem = {};

    this.items = [
        {name: "Artur", birthDate: 1970},
        {name: "Nurr", birthDate: 2010}
    ];

    this.AddItem = function () {
        this.items.push(this.formitem);
        this.formitem = {};
    }
});
