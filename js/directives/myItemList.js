(function() {
    "use strict";

    angular.module('app')
        .directive('myItemList', MyItemList);

    function MyItemList() {
        return {
            restrict: 'E',
            scope:{
                items: '=',
                itemRemoved: '&'
            },
            controller: MyItemListCtrl,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'myItemList'
        };

        function MyItemListCtrl() {
            var vm = this;
			
			vm.remove = remove;
			
			function remove(item) {
				var index = vm.items.indexOf(item);
				vm.items.splice(index, 1);
				vm.itemRemoved({item: item});
			}
        }
    }
})();