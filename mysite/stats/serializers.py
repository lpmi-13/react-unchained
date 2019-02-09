from rest_framework import serializers
from stats.models import Rank_Unique_Commits_Users
from stats.models import Rank_Total_Commits_Users
from stats.models import Unique_Commits_User


class RankUniqueCommitsUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank_Unique_Commits_Users
        fields = ('rank', 'login', 'contributions')


class RankTotalCommitsUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank_Total_Commits_Users
        fields = ('rank', 'login', 'contributions')


class UniqueCommitsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unique_Commits_User
        fields = ('login', 'repo', 'url', 'created_at')
