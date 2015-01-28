__author__ = 'changyunglin'

# Whole site wide view.
from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib import auth
from django.core.context_processors import csrf
from forms import MyRegistrationForm



def login(request):
    certificate = {}
    certificate.update(csrf(request))
    return render(request, 'login.html', certificate)


def auth_view(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    # If it match, it returns user object, else, None
    user = auth.authenticate(username=username, password=password)

    if user:
        auth.login(request, user)
        return HttpResponseRedirect('/accounts/loggedin')
    else:
        return HttpResponseRedirect('/accounts/invalid')


def loggedin(request):
    # Need to update more detail user information by using request.user object.
    return render(request, 'loggedin.html', {'full_name': request.user.username})


def invalid_login(request):
    return render(request, 'invalid_login.html')


def logout(request):
    auth.logout(request)
    return render(request, 'logout.html')


def register_user(request):
    if request.method == 'POST':
        form = MyRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/accounts/register_success')
    args = {}
    args.update(csrf(request))
    args['form'] = MyRegistrationForm()
    return render(request, 'register.html', args)


def register_success(request):
    return render(request, 'register_success.html')


def hello(request):
    name = 'Mike'
    html = '<html><body>Hi %s</body></html>' % name

    return HttpResponse(html)

def index(request):
    return render(request, 'index.html')