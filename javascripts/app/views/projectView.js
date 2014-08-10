(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app = window.app || {};

  app.ProjectView = (function(_super) {
    __extends(ProjectView, _super);

    function ProjectView() {
      return ProjectView.__super__.constructor.apply(this, arguments);
    }

    ProjectView.prototype.el = "#main";

    ProjectView.prototype.initialize = function() {
      return this.render();
    };

    ProjectView.prototype.render = function() {
      var copy, projectHTML;
      projectHTML = Handlebars.compile(app.templates.projectView);
      copy = projectHTML(this.model.toJSON());
      this.$el.html(copy);
      return this.el;
    };

    return ProjectView;

  })(Backbone.View);

}).call(this);
