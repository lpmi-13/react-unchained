from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from stats.models import Rank_Total_Commits_Users, Rank_Unique_Commits_Users

client = Client()


class GetAllTotalCommitUsersTest(TestCase):
    @classmethod
    def setUp(self):
        Rank_Total_Commits_Users.objects.create(rank=6,
                                                login='Yizzy_Flooks',
                                                contributions=437)
        Rank_Total_Commits_Users.objects.create(rank=39,
                                                login='Duke_Domps',
                                                contributions=483)
        Rank_Total_Commits_Users.objects.create(rank=99,
                                                login='Grammin_Snarkington',
                                                contributions=48)
        Rank_Total_Commits_Users.objects.create(rank=15,
                                                login='Batch_Flashty',
                                                contributions=4)
        Rank_Total_Commits_Users.objects.create(rank=89,
                                                login='Dukey_Skarp',
                                                contributions=374)

    def test_status_okay_from_rank_total_commit_users(self):
        response = client.get(reverse('total-commits'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_data_length_from_rank_total_commits_users(self):
        response = client.get(reverse('total-commits'))
        self.assertEqual(len(response.json()), 5)


class GetAllUniqueCommitsUsersTest(TestCase):
    @classmethod
    def setUp(self):
        Rank_Unique_Commits_Users.objects.create(rank=43,
                                                 login='Djabish_Djones',
                                                 contributions=20)
        Rank_Unique_Commits_Users.objects.create(rank=22,
                                                 login='Goob_Djanky',
                                                 contributions=88)
        Rank_Unique_Commits_Users.objects.create(rank=383,
                                                 login='Krezums_Lank',
                                                 contributions=22)

    def test_status_okay_from_rank_unique_commit_users(self):
        response = client.get(reverse('unique-commits'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_data_length_from_rank_unique_commits_users(self):
        response = client.get(reverse('unique-commits'))
        self.assertEqual(len(response.json()), 3)


class GetAllSearchResultsTest(TestCase):
    @classmethod
    def setUp(self):
        Rank_Unique_Commits_Users.objects.create(rank=34,
                                                 login='Yizzy_Flooks',
                                                 contributions=437)
        Rank_Unique_Commits_Users.objects.create(rank=2,
                                                 login='Duke_Domps',
                                                 contributions=483)
        Rank_Unique_Commits_Users.objects.create(rank=3,
                                                 login='Grammin_Snarkington',
                                                 contributions=48)
        Rank_Unique_Commits_Users.objects.create(rank=100,
                                                 login='Batch_Flashty',
                                                 contributions=4)
        Rank_Unique_Commits_Users.objects.create(rank=10,
                                                 login='Dukey_Skarp',
                                                 contributions=374)
        Rank_Total_Commits_Users.objects.create(rank=3838,
                                                login='Oldsy_DuBlargs',
                                                contributions=233)

    def test_status_okay_from_search_users(self):
        response = client.get('/api/search_users/', {'username': 'nobody'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_no_search_response_for_empty_string(self):
        response = client.get('/api/search_users/', {'username': ''})
        self.assertEqual(response.data, {})

    def test_no_search_response_for_too_long_input(self):
        flood_input = 'a' * 101
        response = client.get('/api/search_users/', {'username': flood_input})
        self.assertEqual(response.data, {})

    def test_data_length_from_search_users(self):
        expected_response = {
            'Rank_Unique_Commits_Users': [
                {
                    'rank': 2,
                    'login': 'Duke_Domps',
                    'contributions': 483
                },
                {
                    'rank': 10,
                    'login': 'Dukey_Skarp',
                    'contributions': 374
                }
            ],
            'Rank_Total_Commits_Users': [
                {
                    'rank': 3838,
                    'login': 'Oldsy_DuBlargs',
                    'contributions': 233
                }
            ]
        }

        response = client.get('/api/search_users/', {'username': 'du'})
        self.assertEqual(len(response.json()), 2)
        self.assertEqual(response.json(), expected_response)

