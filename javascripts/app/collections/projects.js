(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app = window.app || {};

  app.Projects = (function(_super) {
    __extends(Projects, _super);

    function Projects() {
      return Projects.__super__.constructor.apply(this, arguments);
    }

    Projects.prototype.url = "/projects";

    Projects.prototype.model = app.Project;

    return Projects;

  })(Backbone.Collection);

}).call(this);
