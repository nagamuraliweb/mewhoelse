// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('meapp', ['ionic', 'meapp.config', 'meapp.controllers', 'meapp.factories', 'meapp.services', 'meapp.components', 'meapp.constants'])

.run(function($ionicPlatform, $state, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $ionicPlatform.registerBackButtonAction(function (event) {
      if($state.current.name=="landing"){
        navigator.app.exitApp(); //<-- remove this line to disable the exit
      }
      else {
        navigator.app.backHistory();
      }
    }, 100);

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      if(toState.isAuthorized === true) {
        if(!window.localStorage.getItem('userID')) {
          $state.go('landing');
          e.preventDefault();
        }
      }

    });

  });
});

// controllers
angular.module('meapp.controllers', [
  'meapp.controllers.landingCtrl',
  'meapp.controllers.loginCtrl',
  'meapp.controllers.signupCtrl',
  'meapp.controllers.forgotCtrl',
  'meapp.controllers.artistCtrl',
  'meapp.controllers.artistUpdateCtrl',
  'meapp.controllers.artistProfileCtrl',
  'meapp.controllers.artistOverviewCtrl',
  'meapp.controllers.technicianCtrl',
  'meapp.controllers.technicianUpdateCtrl',
  'meapp.controllers.technicianProfileCtrl',
  'meapp.controllers.technicianOverviewCtrl',
  'meapp.controllers.clientCtrl',
  'meapp.controllers.clientUpdateCtrl',
  'meapp.controllers.clientProfileCtrl',
  'meapp.controllers.clientOverviewCtrl',
  'meapp.controllers.artistListCtrl',
  'meapp.controllers.technicianListCtrl',
  'meapp.controllers.filmsListCtrl',
  'meapp.controllers.filmOverviewCtrl'
]);

// factories
angular.module('meapp.factories', [
  'meapp.factories.loginFactory',
  'meapp.factories.loaderFactory',
  'meapp.factories.dataFactory',
  'meapp.factories.artistFactory'
]);

// services
angular.module('meapp.services', [
  'meapp.services.loginService',
  'meapp.services.dataService',
  'meapp.services.artistService'
]);

// components
angular.module('meapp.components', [
  'meapp.component.logout'
]);

// constants
angular.module('meapp.constants', [
  'meapp.constants.core'
]);
