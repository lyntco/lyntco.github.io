(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app = window.app || {};

  app.ProjectListView = (function(_super) {
    __extends(ProjectListView, _super);

    function ProjectListView() {
      return ProjectListView.__super__.constructor.apply(this, arguments);
    }

    ProjectListView.prototype.tagName = "li";

    ProjectListView.prototype.events = {
      click: "view"
    };

    ProjectListView.prototype.initialize = function() {};

    ProjectListView.prototype.render = function() {
      var copy, listHTML;
      listHTML = Handlebars.compile(app.templates.projectListView);
      copy = listHTML(this.model.toJSON());
      this.$el.html(copy);
      return this.el;
    };

    ProjectListView.prototype.view = function() {
      return app.router.navigate("projects/" + this.model.get("id"), true);
    };

    return ProjectListView;

  })(Backbone.View);

}).call(this);
