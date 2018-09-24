from rest_framework import serializers
from stats.models import User
from stats.models import Old_User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('login', 'contribs')

class OldUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Old_User
        fields = ('login', 'contribs')
