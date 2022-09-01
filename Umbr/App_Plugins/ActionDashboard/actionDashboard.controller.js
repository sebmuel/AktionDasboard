angular.module("umbraco").controller("ActionDashboardController", function ($scope, contentResource) {

    var vm = this;

    var partners = contentResource.getChildren(1151);

    partners.then(data => {
        var partner = data.items
        console.log(partner)
    })

});