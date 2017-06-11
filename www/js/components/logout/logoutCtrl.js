(function() {
    'use strict';

    angular.module('meapp.component.logout', [])
	    .component('logout', {
            templateUrl: 'js/components/logout/logout.html',
            bindings: {
                onLogout: '&'
            },
            controller: logoutCtrl
        });

    logoutCtrl.$inject = ['$state'];

    function logoutCtrl($state) {
        var ctrl = this;
        
        ctrl.onLogout = function() {
			window.localStorage.removeItem('userID');
			$state.go('landing');
		}
    }
})();
