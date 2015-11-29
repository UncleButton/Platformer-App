(function() {
    'use strict';
    angular
        .module('app.controller.menu', [])
        .controller('MenuCtrl', Controller);

    Controller.$inject = [];

    function Controller() {
    	var vm = this;

    	init();

    	function init () {
    		console.log('loading the menu ctrl');
    	}
    }
})();
