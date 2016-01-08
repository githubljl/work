/**
 * Created by Administrator on 2016/1/5.
 */

var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/404', {
        templateUrl: '404.html',
    }).when('/back', {
        templateUrl: 'babyback.html',
    }).otherwise({redirectTo: '/404'});
    //$urlRouterProvider.html5Mode(true);
}]);
app.controller('myCtrl', ['$scope' , '$http', function($scope, $http) {
    var url='js/json.js';
    $http.get(url)
        .success(function(data, status, headers, config){
            //console.log(data);
            //console.log(status);
            //console.log(headers);
            //console.log(config);

            var data=data;
            data = data.substring(data.indexOf('{'), data.lastIndexOf('}') + 1);

            //console.log(data);
            data = JSON.parse(data);
            console.log(data);
            $scope.children = data.data;
            $scope.imgHost = 'http://qzone.qq.com/gy/upload/';
            //$scope.name=$scope.children[0]['name'];
        })
        .error(function(data, status, headers, config){
            // ß∞‹–≈œ¢
            console.log(data);
        })

    $scope.defaultBabyImg = './images/1.jpg';
}
]);


