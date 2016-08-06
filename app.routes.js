(function(){
    'use strict';

    angular
    .module('app')
    .config(configure);

    configure.$inject = ['$routeProvider'];

    function configure($routeProvider) {
        $routeProvider
        .when('/', {
            template: '<faction-selector></faction-selector>'
        })
        .when('/characters/:faction',{
            template: '<characters-list></characters-list>',
            referer: '/'
        })
        .when('/characters/:faction/:name',{
            template: '<character-details></character-details>',
            referer: '/characters/:faction'
        });
    }

}());
