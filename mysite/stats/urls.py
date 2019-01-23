from django.urls import path
from django.views.generic.base import RedirectView
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
import urllib.parse

BASE_API_PATH = 'api/'
favicon_view = RedirectView.as_view(url='/static/favicon.ico', permanent=True)

urlpatterns = [
    path(urllib.parse.urljoin(BASE_API_PATH, 'unique_commits_stats/'), views.UniqueCommitsUsersListCreate.as_view(), name='unique-commits' ),
    path(urllib.parse.urljoin(BASE_API_PATH, 'total_commits_stats/'), views.TotalCommitsUsersListCreate.as_view(), name='total-commits' ),
    path(urllib.parse.urljoin(BASE_API_PATH, 'search_users/'), views.SearchUsersCreate.as_view(), name='search-users' ),
    path('favicon.ico', favicon_view)
]

urlpatterns = format_suffix_patterns(urlpatterns)
