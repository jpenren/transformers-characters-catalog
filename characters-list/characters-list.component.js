(function () {
    'use strict';

    angular
        .module ('app')
        .component ('charactersList', charactersList());

    function charactersList() {

        CharactersListController.$inject = ['$routeParams', '$filter','logger','dataService', 'searchManager'];

        function CharactersListController($routeParams, $filter, logger, dataService, searchManager){
            var vm = this;
            vm.characters = [];
            vm.faction = $routeParams.faction;
            vm.searchFilter = {name: searchManager.getSearchTerm()};

            activate();

            function activate() {
                searchManager.setSearchAvailable(true);

                dataService.getCharacters($routeParams.faction).then(function(data){
                    vm.characters = data;
                });
                
                searchManager.onSearchTermUpdated( function(){
                    vm.searchFilter = {name: searchManager.getSearchTerm()};
                });
            }
        }

        return {
            controller: CharactersListController,
            templateUrl: 'characters-list/characters-list.html'
        }
    }

} ());