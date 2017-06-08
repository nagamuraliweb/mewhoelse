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

    function logoutCtrl() {
        var ctrl = this;
        
        ctrl.onLogout = function() {
			window.localStorage.removeItem('userID');
			$state.go('login');
		}
    }
})();
