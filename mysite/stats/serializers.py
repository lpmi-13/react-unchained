from rest_framework import serializers
from stats.models import Unique_Commits_User
from stats.models import Total_Commits_User

class UniqueCommitsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unique_Commits_User
        fields = ('login', 'contribs')

class TotalCommitsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Total_Commits_User
        fields = ('login', 'contribs')
