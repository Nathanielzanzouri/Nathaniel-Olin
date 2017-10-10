var classApp = angular.module('classApp', [])
  .factory("data", function () {
    var tiles = function () {
      var result = [];
      for (var i = 1; i <= 144; i++) {
        var obj = {
          id: i,
          name: "red",
          text: "",
        }
        result.push(obj)
      }
      return result
    }
    return {
      result: tiles
    }
  });

classApp.controller('classCtrl', function ($scope, data, $timeout) {

  $scope.startDef = null;
  $scope.endDef = null;

  $scope.selectStart = function () {
    if (!$scope.startcolor || $scope.startcolor == "white") {
      $scope.startcolor = "green"
    }
    else if ($scope.startcolor == "green") {
      $scope.startcolor = "white";
    }
  }

  $scope.selectEnd = function () {
    if (!$scope.endcolor || $scope.endcolor == "white") {
      $scope.endcolor = "purple"
    }
    else if ($scope.endcolor == "purple") {
      $scope.endcolor = "white";
    }
  }

  $scope.selectDiv = function (index) {
    if ($scope.divs[index].name == "red") {
      $scope.divs[index].name = "blue"
    } else if ($scope.divs[index].name == "blue") {
      $scope.divs[index].name = "red"
    }
    if ($scope.startcolor == "green" && !$scope.startDef) {
      $scope.divs[index].name = "yellow"
      $scope.divs[index].text = "Start"
      $scope.startDef = true
    }
    if ($scope.endcolor == "purple" && !$scope.endDef) {
      $scope.divs[index].name = "orange"
      $scope.divs[index].text = "End"
      $scope.endDef = true
    }
  }

  $scope.selectGo = function () {
    var startindex, stopindex;
    var foundSS = 0, counter = 0;
    while (foundSS !== 2) {
      if ($scope.divs[counter].name == "yellow") {
        startindex = counter;
        foundSS++;
      }
      else if ($scope.divs[counter].name == "orange") {
        stopindex = counter;
        foundSS++;
      }
      counter++;
    }
    var reachEnd = false;
    var currentTindex = startindex + 1;
    while (!reachEnd) {
      debugger;
      if ($scope.divs[currentTindex]) {
        $scope.divs[currentTindex].name = "green";
        currentTindex++
      }
      // else {
      //   $scope.divs[currentTindex].name = "green";
      //   currentTindex+=12
      // }
      if ($scope.divs[currentTindex].name == "orange") {
        reachEnd = true
      }

    }
  }

  $scope.divs = data.result()

});

