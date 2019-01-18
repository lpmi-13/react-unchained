from django.db import models

class Rank_Unique_Commits_Users(models.Model):
    rank = models.IntegerField(primary_key=True)
    login = models.CharField(max_length=100)
    contributions = models.IntegerField()

class Rank_Total_Commits_Users(models.Model):
    rank = models.IntegerField(primary_key=True)
    login = models.CharField(max_length=100)
    contributions = models.IntegerField()

class Login_User(models.Model):
    login = models.CharField(max_length=100)

class Unique_Commits_User(models.Model):
    login = models.ForeignKey(Login_User, on_delete=models.CASCADE)
    repo = models.CharField(max_length=150, default='github')
    url = models.CharField(max_length=150, default='github')
    created_at = models.DateTimeField()