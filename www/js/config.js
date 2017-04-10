
angular.module('meapp.config', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('landing', {
    url: '/landing',
    templateUrl: 'templates/landing.html',
    controller: 'landingCtrl'
  })

  // login page
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  // forgot password page
  .state('forgot', {
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller: 'forgotCtrl'
  })

  // signup page
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  // overview page
  .state('overview', {
    url: '/overview',
    templateUrl: 'templates/overview.html',
    controller: 'overviewCtrl'
  })

  // setup an abstract state for the tabs directive
    .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html'
  })

  // Each tab has its own nav history stack:

  .state('dashboard.artists', {
    url: '/artists',
    views: {
      'dashboard-artists': {
        templateUrl: 'templates/dashboard-artists.html',
        controller: 'artistsCtrl'
      }
    }
  })

  .state('dashboard.technicians', {
      url: '/technicians',
      views: {
        'dashboard-technicians': {
          templateUrl: 'templates/dashboard-technicians.html',
          controller: 'techniciansCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');

});
