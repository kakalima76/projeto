angular.module('app', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'template_login/login.html',
		controller: 'loginController',
		controllerAs: 'vm'
	})

	.when('/inserir', {
		templateUrl: 'template_inserir/inserir.php',
		controller: 'inserirController',
		controllerAs: 'vm',
		resolve:{
			auth: ['authService', '$window', function(authService, $window){
				var promise = authService.autentica($window.localStorage['token']);
				return promise;
			}]
		}
	})

	.when('/listar', {
		templateUrl: 'template_listar/listar.html',
		controller: 'listarController',
		controllerAs: 'vm',
		resolve:{
			auth: ['authService', '$window', function(authService, $window){
				var promise = authService.autentica($window.localStorage['token']);
				return promise;
			}]
		}
	})

	.when('/solicitar', {
		templateUrl: 'template_solicitar/solicitar.html',
		controller: 'solicitarController',
		controllerAs: 'vm'
	})

	.when('/confirmar', {
		templateUrl: 'template_confirmar/confirmar.html',
		controller: 'confirmarController',
		controllerAs: 'vm'
	})

	.when('/trocar', {
		templateUrl: 'template_trocar/trocar.html',
		controller: 'trocarController',
		controllerAs: 'vm'
	})

	.when('/contribuir', {
		templateUrl: 'template_contribuir/contribuir.html',
		controller: 'contribuirController',
		controllerAs: 'vm'
	})
	

	.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});

	$httpProvider.interceptors.push('timestampInterceptor');


}])