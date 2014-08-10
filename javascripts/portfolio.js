(function() {
  window.app = window.app || {};

  $(document).ready(function() {
    app.templates = {
      appView: $("#app-template").html(),
      projectListView: $("#project-list-template").html(),
      projectView: $("#project-template").html(),
      bioView: $("#bio-template").html(),
      contactView: $("#contact-template").html()
    };
    app.router = new app.Router();
    return Backbone.history.start();
  });

}).call(this);
