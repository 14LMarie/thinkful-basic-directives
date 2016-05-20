var app = angular.module('myApp', []);

app.directive('makeEditable', function () {
    return {
        restrict: 'A',
        templateUrl: 'make-editable.html',
        transclude: true,
        scope: true
    }
});


/*$(document).ready(function () {
    $("#edit-button").on("click", function () {
        $("#edit-container").attr("contenteditable", "true");
    });
});*/
