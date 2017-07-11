
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
    controller: 'landingCtrl',
    isAuthorized: false
  })

  // login page
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
    isAuthorized: false
  })

  // signup page
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl',
    isAuthorized: false
  })

  // forgot password page
  .state('forgot', {
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller: 'forgotCtrl',
    isAuthorized: false
  })

  // artists register
  .state('artist-register', {
    url: '/artist-register',
    templateUrl: 'templates/artist_register.html',
    controller: 'artistCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // artists update
  .state('artist-update', {
    url: '/artist-update',
    templateUrl: 'templates/artist_update.html',
    controller: 'artistUpdateCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // artists profile
  .state('artist-profile', {
    url: '/artist-profile',
    templateUrl: 'templates/artist_profile.html',
    controller: 'artistProfileCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // artists overview page
  .state('artist-overview', {
    url: '/artist-overview',
    templateUrl: 'templates/artist_overview.html',
    controller: 'artistOverviewCtrl',
    controllerAs: 'vm'
  })

  // technicians register
  .state('technician-register', {
    url: '/technician-register',
    templateUrl: 'templates/technician_register.html',
    controller: 'technicianCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // technicians update
  .state('technician-update', {
    url: '/technician-update',
    templateUrl: 'templates/technician_update.html',
    controller: 'technicianUpdateCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // technicians profile
  .state('technician-profile', {
    url: '/technician-profile',
    templateUrl: 'templates/technician_profile.html',
    controller: 'technicianProfileCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // technicians overview page
  .state('technician-overview', {
    url: '/technician-overview',
    templateUrl: 'templates/technician_overview.html',
    controller: 'technicianOverviewCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // clients register
  .state('client-register', {
    url: '/client-register',
    templateUrl: 'templates/client_register.html',
    controller: 'clientCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // clients update
  .state('client-update', {
    url: '/client-update',
    templateUrl: 'templates/client_update.html',
    controller: 'clientUpdateCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // clients profile page
  .state('client-profile', {
    url: '/client-profile',
    templateUrl: 'templates/client_profile.html',
    controller: 'clientProfileCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // clients overview page
  .state('client-overview', {
    url: '/client-overview',
    templateUrl: 'templates/client_overview.html',
    controller: 'clientOverviewCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // films list page
  .state('films-list', {
    url: '/films-list',
    templateUrl: 'templates/films_list.html',
    controller: 'filmsListCtrl',
    controllerAs: 'vm',
    isAuthorized: true
  })

  // film overview page
  .state('film-overview', {
    url: '/film-overview',
    templateUrl: 'templates/film_overview.html',
    controller: 'filmOverviewCtrl',
    controllerAs: 'vm',
    isAuthorized: true
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
        controller: 'artistListCtrl',
        controllerAs: 'vm',
        isAuthorized: true
      }
    }
  })

  .state('dashboard.technicians', {
      url: '/technicians',
      views: {
        'dashboard-technicians': {
          templateUrl: 'templates/dashboard_technicians.html',
          controller: 'technicianListCtrl',
          controllerAs: 'vm',
          isAuthorized: true
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');

});
