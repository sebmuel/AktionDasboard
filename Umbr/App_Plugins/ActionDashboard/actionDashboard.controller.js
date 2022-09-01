

angular.module("umbraco").controller("ActionDashboardController", function ($scope, contentResource) {

    var vm = this;

    contentResource.getChildren(1151)
        .then(response => {

            vm.Partner = response.items;

            console.log(vm.Partner)
    })
    
    


});