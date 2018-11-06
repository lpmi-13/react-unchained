from stats.models import User
from stats.models import Old_User
from stats.serializers import UserSerializer
from stats.serializers import OldUserSerializer
from rest_framework import generics


class OldUserListCreate(generics.ListCreateAPIView):
    queryset = Old_User.objects.all().order_by('-contribs')[:100]
    serializer_class = OldUserSerializer

class ReturnUsersCreate(generics.ListCreateAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        userName = self.request.query_params.post('username', None)
        if userName is not None:
            print('received a post')


class SearchUsersCreate(generics.ListCreateAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        userName = self.request.query_params.get('username', None)
        if userName is not None:
            queryset = User.objects.filter(login__icontains=userName).order_by('-contribs')
            return queryset

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all().order_by('-contribs')[:100]
    serializer_class = UserSerializer
