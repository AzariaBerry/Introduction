app.controller('MainController',['$scope', function($scope) {
    $scope.title = 'The Samuria Code';
    $scope.promo = 'Honor, Courage, Honesty';
    }]);

    //Both the controller MainController and the view index.html have access to $scope. This means we can use $scope to communicate between the controller and the view. In the controller, change the value of title to your own string.