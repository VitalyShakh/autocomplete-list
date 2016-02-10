(function() {
    "use strict";

    angular.module('app')
        .directive('myAutocomplete', MyAutocomplete);

    function MyAutocomplete() {
        return {
            restrict: 'E',
            scope:{
                sourceItems: '=',
                itemSelected: '&'
            },
            controller: ['$scope', MyAutocompleteCtrl],
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'myAutocomplete'
        };

        function MyAutocompleteCtrl($scope) {
            var vm = this;
			
			vm.matchingItems = [];
			vm.term = '';
			vm.dropdownIsVisible = false;
						
			vm.onFocus = onFocus;
			vm.onBlur = onBlur;
			vm.select = select;
			
			activate();
			
			function activate() {
				$scope.$watch('vm.term', onTermChanged);
			}
			
			function onTermChanged(newValue, oldValue) {
				vm.matchingItems = vm.sourceItems.filter(containsTerm);
				if (vm.matchingItems.length == 1 && matchTerm(vm.matchingItems[0])) {
					select(vm.matchingItems[0]);
				}
			}
			
			function matchTerm(item) {
				return item.toLowerCase() == vm.term.toLowerCase();
			}
			
			function containsTerm(item) {
				return item.toLowerCase().indexOf(vm.term.toLowerCase()) > -1;
			}
						
			function onFocus() {
				vm.dropdownIsVisible = true;
			}
			
			function onBlur() {
				vm.dropdownIsVisible = false;
			}
			
			function select(item) {
				vm.itemSelected({item: item});
				vm.term = '';
			}
        }
    }
})();