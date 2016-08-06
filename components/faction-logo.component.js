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
            template: '<img ng-src="resources/images/{{$ctrl.faction | lowercase}}.png"/>'
        }
    }

} ());