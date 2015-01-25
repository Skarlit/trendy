var AppRouter = Backbone.Router.extend({
  routes: {
    'hello': 'renderHello',
    'activity': 'renderActivty', 
  },
  renderHello: function() {
    var footerView = new FooterView();
    $('#footer').html(footerView.render().$el.html());
  },
  renderActivty: function() {
    var activity = new Activity({"title":"Vietnam","subtitle":"Explore the best of Vietnam from Hanoi to Ho Chi Minh City. Trip for Two!","price_person":"$1,509.00","price_person_msrp":"$3,200.00","duration":"10 Days","discount":"53% Off","short_description":"Grab a loved one and explore the incredible natural landscapes, historic sites, bustling cities, and quaint village culture of this fascinating and vivacious country. This trip covers the following for two people: all accommodations, most meals, flight from Hanoi to Ho Chi Minh City, guide, activities per itinerary, and all ground transportation.","phone":"1 888.640.1528","email":"adventures.support@theclymb.com","images":["//c4.clymb.us/travel_products/1920/hero_original_1412458720.jpg","//c3.clymb.us/travel_products/1921/hero_original_1412289656.jpg","//c4.clymb.us/travel_products/1922/hero_original_1412289657.jpg","//c3.clymb.us/travel_products/1923/hero_original_1412289657.jpg","//c4.clymb.us/travel_products/1924/hero_original_1412289658.jpg","//c3.clymb.us/travel_products/1925/hero_original_1412289658.jpg"],"start_place":"Start: Hanoi, Vietnam","end_place":"Finish: Ho Chi Minh City, Vietnam","minimum_age":" All Ages","act_difficulty":2,"passport":"Required","accommodations":"Shared hotel room and boat cabin","trip_activities":["Hike","Road Cycle","Kayak","Fishing","Culture","Swim"]});
   $('#activity-card').html((new ActivityView({model: activity})).render().$el.html());
  }
})