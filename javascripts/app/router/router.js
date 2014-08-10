(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app = window.app || {};

  app.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      "": "index",
      "projects": "index",
      "projects/:id": "show",
      bio: "bio",
      contact: "contact"
    };

    Router.prototype.initialize = function() {
      app.projects = new app.Projects([
        new app.Project({
          id: 1,
          title: "DidThatFit.Me",
          summary: "Clothes gotta fit you man",
          content: "MY SPIIIIIIIIINE!!!!"
        }), new app.Project({
          id: 2,
          title: "Fireball",
          summary: "Translation app",
          content: "lolololo"
        }), new app.Project({
          id: 3,
          title: "Burning Airlines",
          summary: "Burninggggg",
          content: "Rawr"
        }), new app.Project({
          id: 4,
          title: "??? It's a mystery",
          summary: "My final. What will this be",
          content: "Woop"
        })
      ]);
      console.log("routes init");
    };

    Router.prototype.index = function() {
      var view;
      view = new app.AppView({
        collection: app.projects
      });
      view.render();
      console.log("got to projects/index thing");
    };

    Router.prototype.show = function(id) {
      var project;
      project = app.projects.get(id);
      new app.ProjectView({
        model: project
      });
      console.log("got to project " + id);
    };

    Router.prototype.bio = function() {
      var view;
      view = new app.BioView();
      view.render();
      console.log("you got to bio");
    };

    Router.prototype.contact = function() {
      var view;
      view = new app.ContactView();
      view.render();
      console.log("you got to contact");
    };

    return Router;

  })(Backbone.Router);

}).call(this);
