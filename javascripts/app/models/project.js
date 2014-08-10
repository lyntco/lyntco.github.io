(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app = window.app || {};

  app.Project = (function(_super) {
    __extends(Project, _super);

    function Project() {
      return Project.__super__.constructor.apply(this, arguments);
    }

    Project.prototype.urlRoot = "/projects";

    Project.prototype.defaults = {
      title: "Project",
      link: "#",
      imageLarge: "/images/project01.jpg",
      imageThumb: "/images/project01_thumb.jpg",
      images: ["/images/project01_01.jpg", "/images/project01_02.jpg"],
      summary: "This is a project",
      detail: "This is a detailed description of this Project",
      builtWith: ["Backbonejs", "Handlebars", "Javascript", "Hosted by Github.io"],
      collaborators: []
    };

    return Project;

  })(Backbone.Model);

}).call(this);
