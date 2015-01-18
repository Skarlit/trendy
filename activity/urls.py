__author__ = 'changyunglin'
# This is the URL only for activity app (this should be change into Activity as an app.)
# Hence we can have A/B

from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^all/$', 'activity.views.activities'),
    # Exp: <id> is the paras that you pass in.
    url(r'^get/(?P<activity_id>\d+)/$', 'activity.views.activity'),
    url(r'language/(?P<language>[a-z\-]+)/$', 'activity.views.language'),
    url(r'^create/$', 'activity.views.create'),
    url(r'^like/(?P<activity_id>\d+)/$', 'activity.views.like_activity'),

)

