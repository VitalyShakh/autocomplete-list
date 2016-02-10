(function () {
    "use strict";

    angular
        .module('app')
        .controller('homeCtrl', [HomeCtrl]);

    function HomeCtrl() {
        var vm = this;
		
		vm.sourceItems = ['One','Two','One 2','Three'];
		vm.selectedItems = [];
		
		vm.onItemSelected = onItemSelected;
		
		function onItemSelected(item) {
			vm.selectedItems.push(item);
		}
    }
})();