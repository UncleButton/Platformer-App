(function() {
    'use strict';
    angular
        .module('app.service.world', [])
        .service('WorldService', Service);

    Service.$inject = ['$q', '$http'];

    function Service($q, $http) {
        var service = {
            load: load
        };

        return service;

        function load(world) {
        	var deferred = $q.defer();
            $http.get('worlds/world_' + world + '.json').success(function(res) {
                deferred.resolve(res);
            }).error(function(e) {
            	deferred.reject(e);
            });
            return deferred.promise;
        }
    }
})();
