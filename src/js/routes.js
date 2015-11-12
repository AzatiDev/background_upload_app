App.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/initing');
    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('app_load', {
            url: '/initing',
            controller: "AppLoadController",
            templateUrl: 'views/app_loading.html'
        });

});
