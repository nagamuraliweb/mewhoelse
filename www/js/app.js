// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('meapp', ['ionic', 'meapp.config', 'meapp.controllers'])

.run(function($ionicPlatform, $state) {
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

  });
});

// controllers
angular.module('meapp.controllers', [
  'meapp.controllers.landingCtrl',
  'meapp.controllers.artistsCtrl',
  'meapp.controllers.techniciansCtrl',
  'meapp.controllers.signupCtrl',
  'meapp.controllers.loginCtrl',
  'meapp.controllers.forgotCtrl',
  'meapp.controllers.artistOverviewCtrl',
  'meapp.controllers.techniciansOverviewCtrl',
  'meapp.controllers.clientsOverviewCtrl',
  'meapp.controllers.clientsCtrl'
  ]);
