angular.module('form.Service')
.service('Api', ['$http', function($http) {
	var self = this;

	self.getQuestions = function(cb){
		$http.get('data/questions.json').then(
			function(res){
				cb(res);
			},
			function (res){
				cb(res);
			}
		);
	};

}]);
