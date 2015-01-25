var ActivityView = Backbone.View.extend({
  render: function(){
    var template = _.template($('#activity-template').html());
    this.$el.html(template({activity: this.model.attributes}));
    return this;
  }
})