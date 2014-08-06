'use strict';

/**
 * @ngdoc overview
 * @name lettoo-weixin-app
 * @description
 * # lettoo-weixin-app
 *
 * Main module of the application.
 */
var app = angular
    .module('lettoo-weixin-app', [
        'ngRoute',
        'ngResource'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })
            .when('/signUp', {
                templateUrl: 'views/tpl/signUp.html',
                controller: 'signUpController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
