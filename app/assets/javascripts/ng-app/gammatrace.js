angular
    .module('Gammatrace', [
        "ngResource",
        "ui.bootstrap",
        'gridster'
    ])

angular.module('Gammatrace')

.controller('DashboardCtrl', ['$scope', '$timeout',
  function($scope, $timeout) {
    $scope.gridsterOptions = {
      margins: [2, 2],
      columns: 12,
      draggable: {
        handle: ".dragDiv"
      }
    };

    $scope.dashboards = {
      '1': {
        id: '1',
        name: 'Home',
        widgets: [{
          col: 0,
          row: 0,
          sizeY: 2,
          sizeX: 2,
          graphType: "helloworld",
          name: "Widgedddt 1"
        }, {
          col: 2,
          row: 2,
          sizeY: 2,
          sizeX: 2,
          graphType: "helloworld",
          name: "Widgedt 2"
        }]
      },
      '2': {
        id: '2',
        name: 'Other',
        widgets: [{
          col: 1,
          row: 1,
          sizeY: 1,
          sizeX: 2,
          graphType: "helloworld",
          name: "Other Widget 1"
        }, {
          col: 1,
          row: 3,
          sizeY: 1,
          sizeX: 1,
          graphType: "helloworld",
          name: "Other Widget 2"
        }]
      }
    };

    $scope.clear = function() {
      $scope.dashboard.widgets = [];
    };

    $scope.addTimeSeriesWidget = function() {
      $scope.dashboard.widgets.push({
        name: "New Widget",
        sizeX: 1,
        sizeY: 1,
        graphType: "timeseries",
        gTypeName: "Time Series"
      });
    };

    $scope.addTermStructureWidget = function() {
      $scope.dashboard.widgets.push({
        name: "New Widget",
        sizeX: 1,
        sizeY: 1,
        graphType: "termstructure",
        gTypeName: "Term Structure"
      });
    };

    $scope.addWidget = function() {
      $scope.dashboard.widgets.push({
        name: "New Widget",
        sizeX: 1,
        sizeY: 1
      });
    };

    $scope.addDatatableWidget = function() {
      $scope.dashboard.widgets.push({
        name: "New Widget",
        sizeX: 1,
        sizeY: 1,
        graphType: "datatable",
        gTypeName: "Data Table"
      });
    };

    $scope.addTimeSeriesWidget = function() {
      $scope.dashboard.widgets.push({
        name: "New Widget",
        sizeX: 1,
        sizeY: 1,
        graphType: "timeseries",
        gTypeName: "Time Series"
      });
    };

    $scope.$watch('selectedDashboardId', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.dashboard = $scope.dashboards[newVal];
      } else {
        $scope.dashboard = $scope.dashboards[1];
      }
    });

    // init dashboard
    $scope.selectedDashboardId = '1';

  }
])

.controller('CustomWidgetCtrl', ['$scope', '$modal',
  function($scope, $modal) {

    $scope.remove = function(widget) {
      $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
    };

    $scope.openSettings = function(widget) {
      $modal.open({
        scope: $scope,
        templateUrl: 'demo/dashboard/widget_settings.html',
        controller: 'WidgetSettingsCtrl',
        resolve: {
          widget: function() {
            return widget;
          }
        }
      });
    };

  }
])

.controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$modalInstance', 'widget',
  function($scope, $timeout, $rootScope, $modalInstance, widget) {
    $scope.widget = widget;

    $scope.form = {
      name: widget.name,
      sizeX: widget.sizeX,
      sizeY: widget.sizeY,
      col: widget.col,
      row: widget.row
    };

    $scope.sizeOptions = [{
      id: '1',
      name: '1'
    }, {
      id: '2',
      name: '2'
    }, {
      id: '3',
      name: '3'
    }, {
      id: '4',
      name: '4'
    }];

    $scope.dismiss = function() {
      $modalInstance.dismiss();
    };

    $scope.remove = function() {
      $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
      $modalInstance.close();
    };

    $scope.submit = function() {
      angular.extend(widget, $scope.form);

      $modalInstance.close(widget);
    };

  }
])

// helper code
.filter('object2Array', function() {
  return function(input) {
    var out = [];
    for (i in input) {
      out.push(input[i]);
    }
    return out;
  }
});



