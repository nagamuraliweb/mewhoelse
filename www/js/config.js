
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

  // artists register
  .state('artist-register', {
    url: '/artist-register',
    templateUrl: 'templates/artist-register.html',
    controller: 'artistsCtrl'
  })

  // technicians register
  .state('technicians-register', {
    url: '/technicians-register',
    templateUrl: 'templates/technicians-register.html',
    controller: 'techniciansCtrl'
  })

  // clients register
  .state('clients-register', {
    url: '/clients-register',
    templateUrl: 'templates/clients-register.html',
    controller: 'clientsCtrl'
  })

  // overview page
  .state('artist_overview', {
    url: '/artist_overview',
    templateUrl: 'templates/artist_overview.html',
    controller: 'artistOverviewCtrl'
  })

  // overview page
  .state('technicians_overview', {
    url: '/technicians_overview',
    templateUrl: 'templates/technicians_overview.html',
    controller: 'techniciansOverviewCtrl'
  })

  // overview page
  .state('clients_overview', {
    url: '/clients_overview',
    templateUrl: 'templates/clients_overview.html',
    controller: 'clientsOverviewCtrl'
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
