(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app = window.app || {};

  app.BioView = (function(_super) {
    __extends(BioView, _super);

    function BioView() {
      return BioView.__super__.constructor.apply(this, arguments);
    }

    BioView.prototype.el = "#main";

    BioView.prototype.initialize = function() {};

    BioView.prototype.render = function() {
      return this.$el.html(app.templates.bioView);
    };

    return BioView;

  })(Backbone.View);

}).call(this);
