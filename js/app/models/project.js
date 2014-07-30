var app = app || {};

app.Project = Backbone.Model.extend({
  defaults: {
    title: 'Project',
    link: '#',
    imageLarge: '/images/project.jpg',
    imageThumb: '/images/project_thumb.jpg',
    summary: 'This is a project',
    detail: 'This is a detailed description of this Project',
    builtWith: ['Backbonejs', 'Handlebars', 'Javascript','Hosted by Github.io'],
    collaborators: [] //objects for people {name: 'bob', link: 'http://github.com/bob'}
  }
});