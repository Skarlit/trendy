__author__ = 'changyunglin'

from django import forms
from models import Activity, Comment


class ActivityForm(forms.ModelForm):

    class Meta:
        # to save activity information
        model = Activity
        # fields maps to the db field that you wanna show in the front.
        fields = {'title', 'description', 'post_time', 'thumbnail', 'likes'}


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('name', 'body')