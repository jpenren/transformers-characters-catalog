(function(){
    'use strict';

    angular
        .module('app')
        .factory('searchManager', searchManager)
        
    function searchManager(){
        var self = this;
        self.subscribers = [];
        self.searchTerm = '';
        self.searchAvailable = false;

        return {
            setSearchTerm: setSearchTerm,
            getSearchTerm: getSearchTerm,
            setSearchAvailable: setSearchAvailable,
            isSearchAvailable: isSearchAvailable,
            onSearchTermUpdated: onSearchTermUpdated
        }

        function setSearchTerm(term) {
            self.searchTerm=term;
            notify();
        }

        function getSearchTerm() {
            return self.searchTerm;
        }

        function setSearchAvailable(available) {
            self.searchAvailable = available;
            notify();
        }

        function isSearchAvailable() {
            return self.searchAvailable;
        }

        function onSearchTermUpdated(callback) {
            self.subscribers.push(callback);
        }

        function notify() {
            angular.forEach(self.subscribers, function (callback) {
                if(typeof callback === "function"){
                    callback();
                }
            });
        }
    }

}());