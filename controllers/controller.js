myApp.controller('MainController' , function ($scope, $firebaseArray) {
    var rootRef = firebase.database().ref();
   console.log(rootRef);
});