angular.module('meapp.factories.loaderFactory', [])
	.factory('loaderFactory', ['$ionicLoading','$ionicPopup', function ($ionicLoading, $ionicPopup) {                                                     

	return {
		showLoader: showLoader,
		hideLoader: hideLoader,
		showAlert: showAlert
	}

	function showLoader() {
		$ionicLoading.show({
			template: '<ion-spinner icon="circles"></ion-spinner>'
		});
	}

	function hideLoader() {
		$ionicLoading.hide();
	}

	function showAlert(title, msg) {
		return $ionicPopup.alert({
			title: title,
			content: msg
		}).then(function (resp){
			return resp;
			console.log(resp);
		});
	}

}]);
