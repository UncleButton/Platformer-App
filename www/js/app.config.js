(function() {
    'use strict';
    angular
        .module('app.config', [])
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Config($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('app', {
                url: '',
                abstract: true,
                controller: 'BaseCtrl as Base',
                templateUrl: 'templates/base.html'
            })
            .state('app.menu', {
                url: '/menu',
                controller: 'MenuCtrl as Menu',
                templateUrl: 'templates/menu.html'
            })
            .state('app.game', {
                url: '/game',
                templateUrl: 'templates/game.html',
                controller: 'GameCtrl as Game'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/menu');

    }
})();
