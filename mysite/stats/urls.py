from django.urls import path
from . import views

urlpatterns = [
    path('api/new_stats/', views.UserListCreate.as_view() ),
    path('api/old_stats/', views.OldUserListCreate.as_view() ),
]
