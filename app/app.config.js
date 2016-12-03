angular.
	module('form-App')
		.config(function($stateProvider, $urlRouterProvider) {

				$stateProvider

				// route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'templates/form.html',
            controller: 'formController'
        })

				// nested states
        // each of these sections will have their own view
        .state('form.question1', {
            url: '/question1',
            templateUrl: 'templates/form-q1.html'
        })


        .state('form.question2', {
            url: '/question2',
            templateUrl: 'templates/form-q2.html'
        })


        .state('form.question3', {
            url: '/question3',
            templateUrl: 'templates/form-q3.html'
        })

				.state('form.question4', {
						url: '/question4',
						templateUrl: 'templates/form-q4.html'
				})

				.state('form.question5', {
						url: '/question5',
						templateUrl: 'templates/form-q5.html'
				})

				.state('form.answers', {
						url: '/answers',
						templateUrl: 'templates/form-answers.html'
				});

    // send users to the form page
    $urlRouterProvider.otherwise('/form/question1');
})
