(function () {
    'use strict';

    angular
        .module ('app')
        .component ('factionLogo', factionLogo());


    function factionLogo() {

        return {
            bindings: {
                faction: '<'
            },
            template: '<img ng-src="resources/img/{{$ctrl.faction | lowercase}}.png"/>'
        }
    }

} ());