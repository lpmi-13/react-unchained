from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
import urllib.parse

BASE_API_PATH = 'api/'

urlpatterns = [
    path(urllib.parse.urljoin(BASE_API_PATH, 'unique_commits_stats/'), views.UniqueCommitsUsersListCreate.as_view(), name='unique-commits' ),
    path(urllib.parse.urljoin(BASE_API_PATH, 'total_commits_stats/'), views.TotalCommitsUsersListCreate.as_view(), name='total-commits' ),
    path(urllib.parse.urljoin(BASE_API_PATH, 'search_users/'), views.SearchUsersCreate.as_view(), name='search-users' ),
    # path(urllib.parse.urljoin(BASE_API_PATH, 'user/:username', views.SingleUser.as_view(), name='single-user'))
]

urlpatterns = format_suffix_patterns(urlpatterns)
