var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  initialize: function(){},
  render: function(){
    this.$el.html( app.templates.appView )
  }
});