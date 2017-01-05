angular
  .module('Rokk3rlabs')
  .config(appConfig)

function appConfig($routeProvider, $locationProvider, CONFIG) {
  $routeProvider
    .when('/', {
      templateUrl: CONFIG.TEMPLATE_DIR + 'news.html',
      controller: 'News',
      controllerAs: "vm"
    })

  .otherwise({
    redirectTo: '/'
  });

  if (window.history && window.history.pushState) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
}