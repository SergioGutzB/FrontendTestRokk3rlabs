var app = angular.module('Rokk3rlabs');
app.controller('News', newsController);
newsController.$inject = [];

function newsController() {
  var self = this;

  (function($) {
    var $container = $('.news');
    $container.imagesLoaded(function() {
      $container.masonry({
        columnWidth: '.new',
        itemSelector: '.new'
      });
    });

    //Reinitialize masonry inside each panel after the relative tab link is clicked - 
    $('a[data-toggle=tab]').each(function() {
      var $this = $(this);

      $this.on('shown.bs.tab', function() {

        $container.imagesLoaded(function() {
          $container.masonry({
            columnWidth: '.new',
            itemSelector: '.news'
          });
        });

      }); //end shown
    }); //end each

  })(jQuery);
}