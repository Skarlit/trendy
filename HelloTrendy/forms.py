__author__ = 'changyunglin'
# extends from django.contrib.auth.forms import UserCreationForm
# find a package or something to replace this.

from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class MyRegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def save(self, commit=True):
        # This is customer form inherited from UserCreationFrom
        # Dont' save it until we collect all the data from user. this is what commit=False for.
        user = super(UserCreationForm, self).save(commit=False)
        user.email = self.cleaned_data['email']

        if commit:
            user.save()

        return user




