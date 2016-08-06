/**
 * Convenience logger service
 */
(function(){
    'use strict';

    angular
        .module('app')
        .factory('logger', logger);

    function logger() {
        var service = {
            info: info,
            error: error
        };

        function info(message){
            console.log('Info: '+message);
        }

        function error(message) {
            console.log('Error: '+message);
        }

        return service;
    }

})();