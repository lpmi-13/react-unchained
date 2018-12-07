from stats.models import Unique_Commits_User
from stats.models import Total_Commits_User
from stats.serializers import UniqueCommitsUserSerializer
from stats.serializers import TotalCommitsUserSerializer
from rest_framework import generics

from stats.utils.input_validator import is_input_valid

class UniqueCommitsUserListCreate(generics.ListCreateAPIView):
    queryset = Unique_Commits_User.objects.all().order_by('-contribs')[:100]
    serializer_class = UniqueCommitsUserSerializer

class TotalCommitsUserListCreate(generics.ListCreateAPIView):
    queryset = Total_Commits_User.objects.all().order_by('-contribs')[:100]
    serializer_class = TotalCommitsUserSerializer

class SearchUsersCreate(generics.ListCreateAPIView):
    serializer_class = UniqueCommitsUserSerializer

    def get_queryset(self):
        userName = self.request.query_params.get('username', None)
        if is_input_valid(userName):
            queryset = Unique_Commits_User.objects.filter(login__icontains=userName).order_by('-contribs')
            return queryset
