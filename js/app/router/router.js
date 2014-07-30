var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'projects': 'projects',
    'project/:id': 'getProject',
    'about': 'about',
    'contact': 'contact'
  },
  initialize: function() {
    //init projects i guess
    console.log('routes init')
  },
  index: function() {
    // render a view for the index page here
  },
  projects: function(){

  },
  getProject: function(id){
    // render single project
  },
  about: function(){
    //render about view
  },
  contact: function(){

  }
});