angular.module("listaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl: "view/alert.html",
		replace: true, // realiza o replace na div que está atribuida

		//restringe a somente o atributo para funcionar, pode ter outros param
		//A - E - C - M, pode usar elas juntas tb
		//restrict: "AE" 
		scope: {
			title: "@" //Se title fosse outro nome, após o @ deveria colocar o nome tbm, ex topic : @title
			//,error: "=message"
		},
		transclude: true
	};
});