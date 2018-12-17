import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse, resolve
from stats.models import Total_Commits_User, Unique_Commits_User
from stats.serializers import UniqueCommitsUserSerializer, TotalCommitsUserSerializer
from stats import views

client = Client()

class GetAllTotalCommitUsersTest(TestCase):
    @classmethod
    def setUp(self):
        Total_Commits_User.objects.create(login='Yizzy_Flooks', contribs=437)
        Total_Commits_User.objects.create(login='Duke_Domps', contribs=483)
        Total_Commits_User.objects.create(login='Grammin_Snarkington', contribs=48)
        Total_Commits_User.objects.create(login='Batch_Flashty', contribs=4)
        Total_Commits_User.objects.create(login='Dukey_Skarp', contribs=374)

    def test_status_okay_from_total_commit_users(self):
        response = client.get(reverse('total-commits'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_data_length_from_total_commits_users(self):
        response = client.get(reverse('total-commits'))
        self.assertEqual(len(response.json()), 5)

class GetAllUniqueCommitsUsersTest(TestCase):
    @classmethod
    def setUp(self):
        Unique_Commits_User.objects.create(login='Djabish_Djones', contribs=20)
        Unique_Commits_User.objects.create(login='Goob_Djanky', contribs=88)
        Unique_Commits_User.objects.create(login='Krezums_Lank', contribs=22)

    def test_status_okay_from_unique_commit_users(self):
        response = client.get(reverse('unique-commits'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_data_length_from_unique_commits_users(self):
        response = client.get(reverse('unique-commits'))
        self.assertEqual(len(response.json()), 3)

class GetAllSearchResultsTest(TestCase):
    @classmethod
    def setUp(self):
        Unique_Commits_User.objects.create(login='Yizzy_Flooks', contribs=437)
        Unique_Commits_User.objects.create(login='Duke_Domps', contribs=483)
        Unique_Commits_User.objects.create(login='Grammin_Snarkington', contribs=48)
        Unique_Commits_User.objects.create(login='Batch_Flashty', contribs=4)
        Unique_Commits_User.objects.create(login='Dukey_Skarp', contribs=374)

    def test_status_okay_from_search_users(self):
        response = client.get('/api/search_users/', {'username': 'nobody'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_no_search_response_for_empty_string(self):
        response = client.get('/api/search_users/', {'username': ''})
        self.assertEqual(response.data, [])

    def test_no_search_response_for_too_long_input(self):
        flood_input = 'a' * 101
        response = client.get('/api/search_users/', {'username': flood_input})
        self.assertEqual(response.data, [])

    def test_data_length_from_search_users(self):
        expected_response = [
            {
                'login':'Duke_Domps',
                'contribs': 483
            },
            {
                'login':'Dukey_Skarp',
                'contribs': 374
            }
        ]
        response = client.get('/api/search_users/', {'username':'du'})
        self.assertEqual(len(response.json()), 2)
        self.assertEqual(response.json(), expected_response)