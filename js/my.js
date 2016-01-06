/**
 * Created by Administrator on 2016/1/5.
 */

var app = angular.module('myApp', []);
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

}]);

//babyApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
//    var url = 'http://each.sinaapp.com/wechat/url2text.php?http://qzonestyle.gtimg.cn/qzone_v6/lostchild/data.js';
//    $http({method: 'GET', url: url}).then(function(res) {
//        if (res.data) {
//            var data = res.data;
//            data = data.substring(data.indexOf('{'), data.lastIndexOf('}') + 1);
//            data = JSON.parse(data);
//            $scope.children = data.data;
//            $scope.imgHost = 'http://qzone.qq.com/gy/upload/';
//            // $scope.defaultImg = 'http://tp3.sinaimg.cn/1933895942/180/5662863775/1';
//        }
//    }, function(res) {
//        console.log(res);
//    });
//
//    $scope.defaultBabyImg = defaultBabyImg;
//    $scope.currentChild = null;
//    $scope.getCurrentChild = function(child) {
//        $scope.currentChild = child;
//    };
//}]);