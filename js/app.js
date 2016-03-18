var myApp = angular.module('myApp', ['ngRoute']);

// HEADER CONTROLLER
myApp.controller('headerController', ['$scope', function($scope) { 
    $scope.header = 'svg/header.svg'
}]);

// NAV CONTROLLER
myApp.controller('navController', ['$scope', function($scope) {
    $scope.nav = [
        {id: "home-nav", class: "left", fa: "fa-home", link: "index.html", label: ""},
        {id: "web-nav", class: "left", fa: "fa-code", link: "#web", label: " Web Developement"},
        {id: "design-nav", class: "left", fa: "fa-paint-brush", link: "#design", label: " Digital Designs"},
        {id: "more-nav", class: "left", fa: "fa-plus-square", link: "#more", label: " More Projects"},
        {id: "edu-nav", class: "left", fa: "fa-graduation-cap", link: "#edu", label: " Education"},
        {id: "resume-nav", class: "left", fa: "fa-file-text", link: "#resume", label: " Resume"},
        {id: "feedback-nav", class: "right", fa: "fa-commenting", link: "#feedback", label: " Feedback"}
    ];
}]);

// FOOTER CONTROLLER
myApp.controller('footerController', ['$scope', function($scope) {
    $scope.footer = [
        {url: "https://plus.google.com/u/0/117519114708893326555", id: "googlePlusBox", fa: "fa-google-plus", class: "social-box"},
        {url: "https://www.linkedin.com/in/wardx904", id: "linkedInBox", fa: "fa-linkedin", class: "social-box"},
        {url: "https://twitter.com/WardX904", id: "twitterBox", fa: "fa-twitter", class: "social-box"},
        {url: "https://www.facebook.com/WardX904", id: "facebookBox", fa: "fa-facebook", class: "social-box"}
    ];
}]);

myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/web', {
        templateUrl: 'pages/web.html',
        controller: 'webController'
    })
    .when('/design', {
        templateUrl: 'pages/design.html',
        controller: 'designController'
    })
    .when('/more', {
        templateUrl: 'pages/more.html',
        controller: 'moreController'
    })
    .when('/edu', {
        templateUrl: 'pages/edu.html',
        controller: 'eduController'
    })
    .when('/resume', {
        templateUrl: 'pages/resume.html',
        controller: 'resumeController'
    })
    .when('/feedback', {
        templateUrl: 'pages/feedback.html',
        controller: 'feedbackController'
    });
})

routeModule.controller('homeController', function($scope) {
    $scope.pageClass = 'home';
})
routeModule.controller('webController', function($scope) {
    $scope.pageClass = 'web';
})
routeModule.controller('designController', function($scope) {
    $scope.pageClass = 'design';
})
routeModule.controller('moreController', function($scope) {
    $scope.pageClass = 'more';
})
routeModule.controller('eduController', function($scope) {
    $scope.pageClass = 'edu';
})
routeModule.controller('resumeController', function($scope) {
    $scope.pageClass = 'resume';
})
routeModule.controller('feedbackController', function($scope) {
    $scope.pageClass = 'feedback';
});