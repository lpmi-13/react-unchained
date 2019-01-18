from stats.models import Rank_Unique_Commits_Users
from stats.models import Rank_Total_Commits_Users
from stats.models import Unique_Commits_User
from stats.serializers import RankUniqueCommitsUsersSerializer
from stats.serializers import RankTotalCommitsUsersSerializer
from stats.serializers import UniqueCommitsUserSerializer
from rest_framework import generics
from rest_framework.throttling import AnonRateThrottle
from drf_multiple_model.views import ObjectMultipleModelAPIView

from mysite.throttling import CustomThrottle

from stats.utils.input_validator import is_input_valid


class UniqueCommitsUsersListCreate(generics.ListCreateAPIView):
    throttle_classes = (AnonRateThrottle,)

    queryset = Rank_Unique_Commits_Users.objects.all().order_by('rank')[:100]
    serializer_class = RankUniqueCommitsUsersSerializer

class TotalCommitsUsersListCreate(generics.ListCreateAPIView):
    throttle_classes = (AnonRateThrottle,)

    queryset = Rank_Total_Commits_Users.objects.all().order_by('rank')[:100]
    serializer_class = RankTotalCommitsUsersSerializer

class SearchUsersCreate(ObjectMultipleModelAPIView):
    throttle_classes = (AnonRateThrottle,)

    def get_querylist(self):
        userName = self.request.query_params.get('username', None)
        if is_input_valid(userName):
            querylist = [
              {'queryset': Rank_Unique_Commits_Users.objects.filter(login__icontains=userName).order_by('rank'), 'serializer_class': RankUniqueCommitsUsersSerializer},
              {'queryset': Rank_Total_Commits_Users.objects.filter(login__icontains=userName).order_by('rank'), 'serializer_class': RankTotalCommitsUsersSerializer},
            ]
            return querylist
        else:
            return []

# class SingleUser(generics.ListCreateAPIView):
#     def get_queryset(self):
#         userName = self.request.query_params.get('username', None)
#         if is_input_valid(userName):
#             queryset = Unique_Commits_User.objects.filter(login__icontains=userName)
#             return queryset