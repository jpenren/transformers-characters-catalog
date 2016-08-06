(function () {
    'use strict';

    angular
        .module ('app')
        .component ('characterDetails', characterDetails());


    function characterDetails() {

        CharacterDetailsController.$inject = ['$routeParams', 'dataService', 'searchManager'];

        function CharacterDetailsController($routeParams, dataService, searchManager){
            var vm = this;
            vm.character = {};

            activate();

            function activate() {
                searchManager.setSearchAvailable(false);
                getCharacter($routeParams.name);
            }

            function getCharacter(name){
                return dataService.getCharacter(name).then(function(data){
                    vm.character = data;
                });
            }
        }

        return {
            controller: CharacterDetailsController,
            templateUrl: 'character-details/character-details.html'
        }
    }

} ());