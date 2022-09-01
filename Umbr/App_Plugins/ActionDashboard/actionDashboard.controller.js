angular.module("umbraco").controller("ActionDashboardController", function ($scope, contentResource) {

    var vm = this;

    contentResource.getById(1151).then(function (data) {
        var nodes = data.variants;

        console.log(nodes[0].name)

        vm.Partner = nodes[0].name;
    });
});