var app = angular.module('Rokk3rlabs');
app.controller('News', newsController);
newsController.$inject = ['$scope', '$timeout'];

function newsController($scope, $timeout) {
  var self = this;
  $scope.$parent.$watch(function() {
    return $scope.$parent.vm.openMenu;
  }, function() {
    resize();
    $timeout(function() {
      resize();
    }, 400)
  });

  resize();

  function resize() {
    var $container = $('.news');
    $container.imagesLoaded(function() {
      $container.masonry({
        columnWidth: '.new',
        itemSelector: '.new'
      });
    });

    $('a[data-toggle=tab]').each(function() {
      var $this = $(this);
      $this.on('shown.bs.tab', function() {
        $container.imagesLoaded(function() {
          $container.masonry({
            columnWidth: '.new',
            itemSelector: '.news'
          });
        });
      });
    });

  }
}