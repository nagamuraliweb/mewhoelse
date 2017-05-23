
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

  // signup page
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  // forgot password page
  .state('forgot', {
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller: 'forgotCtrl'
  })

  // artists register
  .state('artist-register', {
    url: '/artist-register',
    templateUrl: 'templates/artist_register.html',
    controller: 'artistCtrl'
  })

  // artists update
  .state('artist-update', {
    url: '/artist-update/:user_id',
    templateUrl: 'templates/artist_update.html',
    controller: 'artistUpdateCtrl'
  })

  // artists profile
  .state('artist-profile', {
    url: '/artist-profile/:user_id',
    templateUrl: 'templates/artist_profile.html',
    controller: 'artistProfileCtrl'
  })

  // artists overview page
  .state('artist-overview', {
    url: '/artist-overview/:user_id',
    templateUrl: 'templates/artist_overview.html',
    controller: 'artistOverviewCtrl'
  })

  // technicians register
  .state('technicians-register', {
    url: '/technicians-register',
    templateUrl: 'templates/technician_register.html',
    controller: 'technicianCtrl'
  })

  // technicians update
  .state('technician-update', {
    url: '/technician-update/:user_id',
    templateUrl: 'templates/technician_update.html',
    controller: 'technicianUpdateCtrl'
  })

  // technicians profile
  .state('technician-profile', {
    url: '/technician-profile/:user_id',
    templateUrl: 'templates/technician_profile.html',
    controller: 'technicianProfileCtrl'
  })

  // technicians overview page
  .state('technician-overview', {
    url: '/technician-overview/:user_id',
    templateUrl: 'templates/technician_overview.html',
    controller: 'technicianOverviewCtrl'
  })

  // clients register
  .state('client-register', {
    url: '/client-register',
    templateUrl: 'templates/client_register.html',
    controller: 'clientCtrl'
  })

  // clients update
  .state('client-update', {
    url: '/client-update/:user_id',
    templateUrl: 'templates/client_update.html',
    controller: 'clientUpdateCtrl'
  })

  // clients profile page
  .state('client-profile', {
    url: '/client-overview/:user_id',
    templateUrl: 'templates/client_profile.html',
    controller: 'clientProfileCtrl'
  })

  // clients overview page
  .state('client-overview', {
    url: '/client-overview/:user_id',
    templateUrl: 'templates/client_overview.html',
    controller: 'clientOverviewCtrl'
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
        templateUrl: 'templates/dashboard_artists.html',
        controller: 'artistsCtrl'
      }
    }
  })

  .state('dashboard.technicians', {
      url: '/technicians',
      views: {
        'dashboard-technicians': {
          templateUrl: 'templates/dashboard_technicians.html',
          controller: 'techniciansCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');

});
