(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app = window.app || {};

  app.AppView = (function(_super) {
    __extends(AppView, _super);

    function AppView() {
      return AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.el = "#main";

    AppView.prototype.initialize = function() {
      return this.render();
    };

    AppView.prototype.render = function() {
      this.$el.html(app.templates.appView);
      return this.collection.each(function(p) {
        var view;
        view = new app.ProjectListView({
          model: p
        });
        return $("#my-projects").append(view.render());
      });
    };

    return AppView;

  })(Backbone.View);

}).call(this);
