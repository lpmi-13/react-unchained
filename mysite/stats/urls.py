from django.urls import path
from . import views
import urllib.parse

BASE_API_PATH = 'api/'

urlpatterns = [
    path(urllib.parse.urljoin(BASE_API_PATH, 'new_stats/'), views.UserListCreate.as_view() ),
    path(urllib.parse.urljoin(BASE_API_PATH, 'old_stats/'), views.OldUserListCreate.as_view() ),
    path(urllib.parse.urljoin(BASE_API_PATH, 'search_users/'), views.SearchUsersCreate.as_view() ),
    path(urllib.parse.urljoin(BASE_API_PATH, 'users/'), views.ReturnUsersCreate.as_view() ),
]
