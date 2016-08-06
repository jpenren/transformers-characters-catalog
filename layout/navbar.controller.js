(function(){
    'use strict';

    angular
        .module('app')
        .controller('NavBarController', NavBarController);

    NavBarController.$inject = ['$scope', '$location', 'connectionManager', 'searchManager'];

    function NavBarController($scope, $location, connectionManager, searchManager){
        var defaultTitle = 'Transformers Catalog';
        var vm = this;
        vm.title = defaultTitle;
        vm.showBackButton = false;
        vm.resetTitle= resetTitle;
        vm.backLink;
        vm.showLoader = false;
        vm.searchTerm = '';
        vm.searchAvailable = false;
        vm.showSearch = false;
        vm.clearSearch = clearSearch;
        vm.searchTermUpdated = searchTermUpdated;

        function resetTitle() {
            vm.title = defaultTitle;
        }

        function searchTermUpdated() {
            searchManager.setSearchTerm(vm.searchTerm);
        }

        function clearSearch() {
            vm.showSearch = false; 
            vm.searchTerm='';
            searchManager.setSearchTerm('');
        }

        searchManager.onSearchTermUpdated(function(){
            vm.searchAvailable = searchManager.isSearchAvailable();
            vm.searchTerm = searchManager.getSearchTerm();
        });

        //Receive network connection events 
        connectionManager.onNetworkEvent(function(){
            vm.showLoader = connectionManager.isLoading();
        });

        //after the route has changed
        $scope.$on("$routeChangeSuccess", function (angularEvent, currentRoute, previousRoute) {
            vm.showSearch = searchManager.getSearchTerm()!='';
            vm.showBackButton = false;
            //Builds back url with current parameters
            if( currentRoute.referer ){
                var backLink = currentRoute.referer;
                var parameters = currentRoute.pathParams;
                for( var key in parameters ){
                    backLink = backLink.replace(":"+key, parameters[key]);
                }
                vm.backLink = backLink;
                vm.showBackButton = true;
            }
        });
    }

}());