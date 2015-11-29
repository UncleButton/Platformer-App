(function() {
    'use strict';
    angular
        .module('app.factory.levels', [])
        .factory('LevelsFactory', Factory);

    Factory.$inject = ['$q', '$http', 'WorldService'];

    function Factory($q, $http, WorldService) {
        var _levels = [], _name;
        var factory = {
            loadWorld: loadWorld
        };

        return factory;

        function loadWorld (world) {
            var deferred = $q.defer();
            WorldService.load(world).then(function (world) {
                deferred.resolve({name: world.name, levels: world.levels});
            }, function (err){
                deferred.reject(err);
            });
            return deferred.promise;
        }
    }
})();
