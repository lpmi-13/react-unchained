from django.test import TestCase

from stats.models import Unique_Commits_User
from stats.models import Total_Commits_User

from stats.utils.input_validator import is_input_valid

class UniqueCommitsUserTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Unique_Commits_User.objects.create(login='CrombopulusMichael', contribs=888)

    def test_login_max_length(self):
        unique_commits_user = Unique_Commits_User.objects.get(id=1)
        max_length = unique_commits_user._meta.get_field('login').max_length
        self.assertEquals(max_length, 100)

class TotalCommitsUserTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Total_Commits_User.objects.create(login='FederationStooge', contribs=48374)

    def test_login_max_length(self):
        total_commits_user = Total_Commits_User.objects.get(id=1)
        max_length = total_commits_user._meta.get_field('login').max_length
        self.assertEquals(max_length, 100)

class InputValidation(TestCase):

    def test_correct_input(self):
        input_string = 'lpmi-13'
        string_is_valid = is_input_valid(input_string)
        self.assertEquals(string_is_valid, True)

    def test_empty_input(self):
        input_string = ''
        string_is_valid = is_input_valid(input_string)
        self.assertEquals(string_is_valid, False)

    def test_too_long_string(self):
        input_string = 'a' * 101
        string_is_valid = is_input_valid(input_string)
        self.assertEquals(string_is_valid, False)
    
    def test_just_right_length_string(self):
        input_string = 'a' * 100
        string_is_valid = is_input_valid(input_string)
        self.assertEquals(string_is_valid, True)

