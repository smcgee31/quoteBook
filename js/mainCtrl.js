angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

    $scope.quotes = dataService.getData();
    // $scope.text = dataService.quotes.text;
    // $scope.author = dataService.quotes.author;

    $scope.addData = function(addText, addAuthor) {
        dataService.addData(addText, addAuthor);
        clearQuoteFieldData();
    }

    $scope.removeData = function(author) {
        dataService.removeData(author);
        clearRemoveFieldData();
    }

    var clearQuoteFieldData = function() {
        $scope.addText = '';
        $scope.addAuthor = '';
    };
    var clearRemoveFieldData = function() {
        $scope.author = '';
    };


});
