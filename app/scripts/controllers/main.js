'use strict';

/**
 * @ngdoc function
 * @name lettoo-weixin-app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lettoo-weixin-app
 */
 $('.datepicker').datepicker()
app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
        {title: 'HTML5 Boilerplate', content: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'},
        {title: 'AngularJS',content: 'AngularJS is a toolset for building the framework most suited to your application development.'},
        {title: 'Karma',content: 'Spectacular Test Runner for JavaScript.'}
    ];
});
app.controller('Navigation',function(){
	this.tab = 1;
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
	this.selectTab= function(setTab){
		this.tab = setTab;
	};
});
