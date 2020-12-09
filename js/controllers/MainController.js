app.controller('MainController',['$scope', function($scope) {
    $scope.title = 'The Samuria Code';
    $scope.promo = 'Honor, Courage, Honesty';
    $scope.product = {
        name: 'The Ninja Code',
        price: 19,
        pubdate: new Date('2020', '03','08')
    }
    }]);

    //Both the controller MainController and the view index.html have access to $scope. This means we can use $scope to communicate between the controller and the view. In the controller, change the value of title to your own string.

    //The word after $scope is the word that will be used in view with {{}} to display that scope data.

    //{{product.name}} will access the name of the product in view (index.html) which is 'The Ninja Code'
    //{{product.price}} will access the price of the product in view (index.html) which is 19
    // Adding | currency at the end of a $scope.object if its a number will turn that number into currency ex. {{product.price |currency }} = $19.00 
    
    
    //Filters II
//Great! The product price changed from a number to a formatted currency. How does it work?

// AngularJS gets the value of product.price.
// It sends this number into the currency filter. The pipe symbol (|) takes the output on the left and “pipes” it to the right.
// The filter outputs a formatted currency with the dollar sign and the correct decimal places.
// In this way, filters help to separate the content in the controller from its presentation in the view.

// new Date is a built in filter for the date ('year', 'month', 'day')