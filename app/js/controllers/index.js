var app = angular.module('Rokk3rlabs');
app.controller('Index', indexController);
indexController.$inject = [];

function indexController() {

  var self = this;
  self.openMenu = true;

  self.openNav = function() {
    // document.getElementById("Sidenav").style.width = "264px";
    document.getElementById("main").style.marginLeft = "264px";
    document.getElementById("Sidenav").classList.remove("close");
  }

  self.closeNav = function() {
    // document.getElementById("Sidenav").style.width = "40px";
    document.getElementById("main").style.marginLeft = "40px";
    document.getElementById("Sidenav").classList.add("close");
  }

  self.toggleMenu = function() {
    self.openMenu = self.openMenu === false ? true : false;
    console.log(self.openMenu)
    if (self.openMenu)
      self.openNav();
    else {
      self.closeNav();
    }
  }
}