angular.module("serialGenerator", []);

//Serviço do tipo provider pode ser configurado externamente
//Que está sendo configurado na pasta config/serialGeneratorConfig.js
angular.module("serialGenerator").provider("serialGenerator", function(){
	
	var _length = 10;
	
	this.getLength = function (){
		return _length
	};

	this.setLength = function (length){
		_length = length;
	};


	this.$get = function (){
		return {
			generate: function(){
				var serial = "";
				while(serial.length < _length){
					serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32 );
				}
				return serial;
			}
		};
	}
});