<<<<<<< HEAD

(function(){
    var app = angular.module('absenceList', []);

    app.controller('StudentsController', function($scope) {
        $scope.studentList = students;

    });

    var students =[
        { name: 'Jens', absence: true},
        { name: 'Henrik', absence: false},
        { name: 'Peter',absence: false}

    ];

})();
=======

(function(){
var app = angular.module('absenceList', []);

app.controller('StudentsController', function($scope) {
  $scope.studentList = students;

});

var students =[
{ name: 'Jens', absence: true},
{ name: 'Henrik', absence: false},
{ name: 'Peter',absence: false}

];

})();
>>>>>>> jona1411-javascript
