from django.shortcuts import render, render_to_response
from django.http import HttpResponse
import requests
import os
from models import Activity
from forms import ActivityForm
from django.http import HttpResponseRedirect
from django.core.context_processors import csrf


# Create your views here.
def activities(request):
    language = 'en-us'
    session_language = 'en-gb'
    if 'lang' in request.COOKIES:
        language = request.COOKIES['lang']

    if 'lang' in request.session:
        session_language = request.session['lang']

    return render(request, 'activities.html',
                  {'activities': Activity.objects.all(),
                   'language': language,
                   'session_language': session_language})


def activity(request, activity_id=1):
    return render(request, 'activity.html',
                  {'activity': Activity.objects.get(id=activity_id)})


def language(request, language='en-gb'):
    response = HttpResponse('setting language to % s' % language)
    response.set_cookie('lang', language)
    request.session['lang'] = language

    return response


def create(request):
    if request.POST:
        # Specify where the files come from.
        form = ActivityForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/activities/all')
    else:
        form = ActivityForm()
    # First time visit
    args = {}
    args.update(csrf(request))
    args['form'] = form

    return render(request, 'create_activity.html', args)


def like_activity(request, activity_id):
    if activity_id:
        act = Activity.objects.get(id=activity_id)
        count = act.likes
        count += 1
        act.likes = count
        act.save()
        # Adding logic that checking the IP address to make sure same ppl don't like twice.
    print 'this is: %s. type: %s' % (activity_id, type(int(activity_id)))
    return HttpResponseRedirect('/activities/get/$s' % activity_id)
