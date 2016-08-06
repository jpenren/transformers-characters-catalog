(function () {
    'use strict';

    angular
        .module ('app')
        .component ('factionSelector', factionSelector());

    function factionSelector() {

        FactionSelectorController.$inject = ['dataService', 'searchManager'];
        function FactionSelectorController(dataService, searchManager){
            var vm = this;
            vm.factions = [];

            activate();

            function activate() {
                searchManager.setSearchAvailable(false);
                searchManager.setSearchTerm('');
                dataService.getFactions().then(function(data){
                    vm.factions = data;
                });
            }
        }

        return {
            controller: FactionSelectorController,
            templateUrl: 'faction-selector/faction-selector.html'
        }
    }

} ());