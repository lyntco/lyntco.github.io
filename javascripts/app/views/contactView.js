(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app = window.app || {};

  app.ContactView = (function(_super) {
    __extends(ContactView, _super);

    function ContactView() {
      return ContactView.__super__.constructor.apply(this, arguments);
    }

    ContactView.prototype.el = "#main";

    ContactView.prototype.initialize = function() {};

    ContactView.prototype.render = function() {
      return this.$el.html(app.templates.contactView);
    };

    return ContactView;

  })(Backbone.View);

}).call(this);
