angular.module('tutorial',[])
	.directive('cpEditable',
		function() {
			'use strict';
			return {
				restrict: 'E',
				template: '<div id="{{contentpoolId}}" class="editable">{{contentpoolTemporaryContent}}</div>',
				scope: {
					contentpoolId: '@',
					contentpoolTemporaryContent: '@'
				},
				replace: true
			}
		});