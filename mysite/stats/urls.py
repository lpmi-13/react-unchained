from django.urls import path
from . import views
import urllib.parse

BASE_API_PATH = 'api/'

urlpatterns = [
    path(urllib.parse.urljoin(BASE_API_PATH, 'unique_commits_stats/'), views.UniqueCommitsUserListCreate.as_view() ),
    path(urllib.parse.urljoin(BASE_API_PATH, 'total_commits_stats/'), views.TotalCommitsUserListCreate.as_view() ),
    path(urllib.parse.urljoin(BASE_API_PATH, 'search_users/'), views.SearchUsersCreate.as_view() ),
]
