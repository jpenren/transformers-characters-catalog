(function(){
    'use strict';

    angular
        .module('app')
        .service('connectionManager', connectionManager)

    function connectionManager(){
        var manager  = this;
        var subscribers = [];
        var activeConnections = 0;
        manager.startConnection = startConnection;
        manager.endConnection = endConnection;
        manager.isLoading = isLoading;
        manager.onNetworkEvent = onNetworkEvent;
        
        function startConnection(){
            activeConnections++;
            notify();
        }

        function endConnection() {
            activeConnections--;
            notify();
        }

        function isLoading(){
            return activeConnections>0;
        }

        /**
         * Subscribe a callback function
         */
        function onNetworkEvent(callback) {
            subscribers.push(callback);
        }

        //Notify to all observers about network status change
        //This also can be implemented with $scope.$watch on controller 
        //or with $rootScope.$broadcast but this is simple and clean (Observer pattern)
        function notify() {
            angular.forEach(subscribers, function (callback) {
                if(typeof callback === "function"){
                    callback();
                }
            });
        }
    }

}());