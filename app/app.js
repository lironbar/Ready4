'use strict';

angular.module('form-App', [
	'form.Service',
	'ngMessages',
	'ui.router',
	'ngSanitize'
])

.controller('formController', function($scope, Api) {

	Api.getQuestions(function(res){
		if (res.data){
			// hold Questions.
			$scope.questions = res.data;
		}
		else {
			alert('Failed to load data');
		}
	});

//	$scope.answers = [];
	$scope.correctAnswers = [];
	$scope.userAnswers = [];

	// function to check correct answers
	$scope.processForm = function() {
		console.log($scope.questions);

		for (var i=0; i < $scope.questions.length; i++){
			var answer = $scope.questions[i].correct_answer;
			if ($scope.userAnswers[i] == answer){
				$scope.correctAnswers.push('Question #' + (i+1));
			}
		}
		if ($scope.correctAnswers.length == 0) {
			$scope.correctAnswers.push('All answers were wrong.');
		}
		console.log($scope.correctAnswers);
	};

});
