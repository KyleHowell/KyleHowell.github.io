// $.ajaxPrefilter(function(){
//   options.url = 'http://localhost:8000/blog-posts/backbone.html' + options.url;
// });

var Items = Backbone.Collection.extend({
  url: '/items'
});

var List = Backbone.View.extend({
  el: '.page',
  render:function(){
    var that = this;
    var items = new Items();
    items.fetch({
      success: function(items) {
        var template = _.template($('item-list-template').html(), {items: items.models})
        that.$el.html('CONTENT');
      }
    })
  }
});

var Router = Backbone.Router.extend({
  routes: {
    '': 'home'
  }
});

var list = new List();

var router = new Router();

router.on('route:home', function(){
  list.render();
});

Backbone.history.start();
