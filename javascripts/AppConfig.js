app.config(function ($routeProvider) {
	$routeProvider
	// .when('/home',{
	// 	templateUrl:'partials/home.html',
	// 	controller: 'AuthCtrl'
	// })
	.when('/I24',{
		templateUrl:'partials/I24.html',
		controller: 'I24Ctrl'
	})
	.when('/I70',{
		templateUrl:'partials/I70.html',
		controller: 'I70Ctrl'
	})
});