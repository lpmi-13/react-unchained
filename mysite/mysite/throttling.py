from rest_framework.throttling import BaseThrottle
from rest_framework.exceptions import Throttled

class CustomThrottle(BaseThrottle):
    def allow_request(self, request, view):
        return False