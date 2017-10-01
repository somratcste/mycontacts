myApp.controller('MainController' , function ($scope, $firebaseArray) {
   var ref = new Firbase('https://mycontacts-2017.firebaseio.com/mycontacts-2017');
   $scope.contacts = $firebaseArray(ref);
   console.log($scope);
});