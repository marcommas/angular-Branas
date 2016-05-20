/*angular.module("listaTelefonica").value("config", {
	//Configuração da URL, caso algum dia mude a url, vem somente neste aqui e muda a url, se n era necessario mudar em todos os locais a url
	baseUrl : "http://localhost:8888/angular-Branas/Aula-08/backend"
});*/

//Pode ser value ou  constant
//Difeça que o constant pode ser injetado em serviços do tipo provider

angular.module("listaTelefonica").constant("config", {
	//Configuração da URL, caso algum dia mude a url, vem somente neste aqui e muda a url, se n era necessario mudar em todos os locais a url
	baseUrl : "http://localhost:8888/angular-Branas/arquivoBackend"
});