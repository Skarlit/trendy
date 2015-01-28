var FooterView = Backbone.View.extend({
  render: function() {
    App.CachedTemplate['footer'] = App.CachedTemplate['footer'] || _.template(App.TemplateElement['footer'].innerHTML);
    this.$el.html(App.CachedTemplate['footer']());
    return this;
  }
});