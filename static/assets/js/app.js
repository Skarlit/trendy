$(document).ready(function() {
  window.App = {}
  App.Router = new AppRouter();
  App.TemplateElement = {
    'footer': document.getElementById('footer-template')
  }
  App.CachedTemplate = {};
  Backbone.history.start();
});