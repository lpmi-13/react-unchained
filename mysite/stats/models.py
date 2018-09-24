from django.db import models

class User(models.Model):
    login = models.CharField(max_length=100)
    contribs = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class Old_User(models.Model):
    login = models.CharField(max_length=100)
    contribs = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
