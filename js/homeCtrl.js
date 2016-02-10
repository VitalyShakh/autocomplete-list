(function () {
    "use strict";

    angular
        .module('app')
        .controller('homeCtrl', [HomeCtrl]);

    function HomeCtrl() {
        var vm = this;
		
		vm.items = ['One','Two','Three'];
    }
})();