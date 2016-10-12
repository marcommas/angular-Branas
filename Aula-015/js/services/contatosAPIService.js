//Este é um serviço criado com factory
//função fábrica que é invocada
angular.module("listaTelefonica").factory("contatosAPI", function ($http, config){
	var _getContatos = function (){
		//esse $http.get(".."); é uma promisse
		return $http.get(config.baseUrl + "/contatosBackend.php");
	};

	var _getContato = function (id){
		//esse $http.get(".."); é uma promisse
		return $http.get(config.baseUrl + "/contatosBackend.php?id=" + id);
	};


	var _saveContato = function (contato){
		return $http.post(config.baseUrl + "/contatosBackend.php/", contato);
	};

	
	return {
		getContatos: _getContatos,
		getContato: _getContato,
		saveContato: _saveContato
	};
});