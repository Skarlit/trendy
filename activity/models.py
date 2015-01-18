from django.db import models
from time import time


def GetUploadFileName(instance, filename):
    # pass in a instance and store in filename
    return "user_upload_files/%s_%s" % (str(time()).replace('.', '_'), filename)


# Create your models here.
class Greeting(models.Model):
    when = models.DateTimeField('date created', auto_now_add=True)


class Activity(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    post_time = models.DateTimeField('date published')
    likes = models.IntegerField()
    thumbnail = models.FileField(upload_to=GetUploadFileName)

    def __unicode__(self):
        # This will show the customized object description.
        return self.title


class Comment(models.Model):
    name = models.CharField(max_length=200)
    body = models.TextField()
    pub_date = models.DateTimeField('date published')
    activity = models.ForeignKey(Activity)