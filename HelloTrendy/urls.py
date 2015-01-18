from django.conf.urls import patterns, include, url
from django.contrib import admin
from views import *

admin.autodiscover()
urlpatterns = patterns('',
    # url(r'^$', activity.views.index, name='index'),
    # url(r'^db', activity.views.db, name='db'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'activities/', include('activity.urls')),  # this include the sub url file. ex: activities/all.

    # User auth urls
    url(r'^accounts/login/$', 'login'),
    url(r'^accounts/auth/$', 'auth_view'),
    url(r'^accounts/logout/$', 'logout'),
    url(r'^accounts/loggedin/$', 'loggedin'),
    url(r'^accounts/invalid/$', 'invalid_login'),
    url(r'^accounts/register/$', 'register_user'),
    url(r'^accounts/register_success/$', 'register_success'),
)