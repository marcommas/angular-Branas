//Este serviço é um criado com service
//usa uma função construtora
angular.module("listaTelefonica").service("operadorasAPI", function ($http, config) {
	this.getOperadoras = function (){
		return $http.get( config.baseUrl + "/operadorasBackend.php");
	};
});