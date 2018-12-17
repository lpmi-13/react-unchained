from django.test import TestCase

from stats.models import Total_Commits_User
from stats.models import Unique_Commits_User


class TotalCommitsUserTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Total_Commits_User.objects.create(login='FederationStooge', contribs=474)

    def test_total_commits_user_login_max_length(self):
        total_commits_user = Total_Commits_User.objects.get(login='FederationStooge')
        max_length = total_commits_user._meta.get_field('login').max_length
        self.assertEquals(max_length, 100)
        
class UniqueCommitsUserTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Unique_Commits_User.objects.create(login='CrombopulusMichael', contribs=888)

    def test_unique_commits_user_login_max_length(self):
        unique_commits_user = Unique_Commits_User.objects.get(login='CrombopulusMichael')
        max_length = unique_commits_user._meta.get_field('login').max_length
        self.assertEquals(max_length, 100)
