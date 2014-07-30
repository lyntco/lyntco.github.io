var app = app || {};

$(document).ready(function(){
  app.templates = {
    appView: $('#app-template').html()

  };
  app.router = new app.Router();
  Backbone.history.start();
});