from stats.models import User
from stats.models import Old_User
from stats.serializers import UserSerializer
from stats.serializers import OldUserSerializer
from rest_framework import generics

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all().order_by('-contribs')
    serializer_class = UserSerializer

class OldUserListCreate(generics.ListCreateAPIView):
    queryset = Old_User.objects.all().order_by('-contribs')
    serializer_class = OldUserSerializer
