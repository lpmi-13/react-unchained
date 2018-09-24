from django.urls import path, include

urlpatterns = [
    path('', include('stats.urls')),
    path('', include('frontend.urls')),
]
