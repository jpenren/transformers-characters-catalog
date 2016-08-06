(function(){
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService)

    dataService.$inject = ['$http', '$q', 'logger', '$filter', 'DATA_API_URL', 'connectionManager'];
    function dataService($http, $q, logger, $filter, DATA_API_URL, connectionManager){
        //Local cache of overall data
        var cache;

        return {
            getFactions: getFactions,
            getCharacters: getCharacters,
            getCharacter: getCharacter
        }

        function getFactions(){
            // Static data returned as Promise, if we change this method to load data from REST 
            // we haven't to change the code on Controllers
            return $q.resolve(['Autobot','Decepticon']);
        }

        function getCharacters(faction) {
            var filter = {'faction':faction};
            if(cache){
                return $q.resolve( applyFilter(filter) );
            } 

            return loadData().then(function(){
                return applyFilter(filter);
            })
        }

        function getCharacter(name) {
            var filter = {'name':name};
            if( cache ){
                return $q.resolve( applyFilter(filter)[0] );
            }

            return loadData().then(function(){
                return applyFilter(filter)[0];
            })
        }

        /**
         * Load data from server as a REST service
         */ 
        function loadData(){
            connectionManager.startConnection();
            return $http.get(DATA_API_URL)
            .then(function(resp){
                //First store in cache
                cache = resp.data.characters;

                return cache;
            })
            .finally(function(){
                connectionManager.endConnection();
            });
        }

        function applyFilter(filter) {
            return $filter('filter')(cache, filter);
        }
    }

}());