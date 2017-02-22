(function(){

angular.module('app')
.controller('inserirController', ['$cordovaBarcodeScanner', '$scope', 'pontosService', '$window', 'loginService', 'itensService', function($cordovaBarcodeScanner, $scope, pontosService, $window, loginService, itensService){
	var vm = this;
	vm.user = 'Agente: ' + loginService.usuario().name;
	vm.matricula = 'Matrícula:  ' + loginService.usuario().matricula;
	vm.item = {}
	vm.opcoes = itensService.itens;
	vm.ocultarDocumento = false;
	vm.showError = false;
	vm.mostrarLoading = false

	$cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        // Success! Barcode data is here
      }, function(error) {
        // An error occurred
      });

	vm.logoff = function(){
		$window.localStorage.removeItem('token');
	}

	vm.filtrarEscolha = function(value){
		

		if((value.descricao.item > 8) && (value.descricao.item < 18)){

			vm.ocultarDocumento = true;

			return;	

		}else{
			
			vm.ocultarDocumento = false;

			return;
		}
	}

	vm.salvar = function(obj){
		vm.showError = false;
		vm.mostrarLoading = true;

		var item = {}
		item['dia'] = obj.data.substring(0,2);
		item['mes'] = obj.data.substring(3,5);
		item['ano'] = obj.data.substring(6,10);
		item['documento'] = obj.documento || '';
		item['pontosDia'] = obj.descricao.pontosDia;
		item['valor'] = obj.descricao.valor;
		item['item']= obj.descricao.item;
		item['descricao'] = obj.descricao.descricao;
		
		var promise = pontosService.salvar(item);

		promise
		.then(function(data){
			vm.mostrarLoading = false
			vm.item = {}
		})
		.catch(function(err){
			vm.mostrarLoading = false
			vm.showError = true;
			vm.message = err.data.message;

		})

	}
	
}]);

})();