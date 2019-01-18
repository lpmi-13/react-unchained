from django.test import TestCase

from stats.models import Rank_Total_Commits_Users
from stats.models import Rank_Unique_Commits_Users
from stats.models import Unique_Commits_User

class TotalCommitsUsersTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Rank_Total_Commits_Users.objects.create(rank=5, login='FederationStooge', contributions=474)

    def test_total_commits_user_login_max_length(self):
        total_commits_user = Rank_Total_Commits_Users.objects.get(login='FederationStooge')
        max_length = total_commits_user._meta.get_field('login').max_length
        self.assertEquals(max_length, 100)
        
class UniqueCommitsUsersTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Rank_Unique_Commits_Users.objects.create(rank=2, login='CrombopulusMichael', contributions=888)

    def test_unique_commits_user_login_max_length(self):
        unique_commits_user = Rank_Unique_Commits_Users.objects.get(login='CrombopulusMichael')
        max_length = unique_commits_user._meta.get_field('login').max_length
        self.assertEquals(max_length, 100)

class TotalCommitsUserTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        '''
        put a big object full of unique PRs here
        '''