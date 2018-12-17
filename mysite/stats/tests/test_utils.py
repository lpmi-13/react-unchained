from django.test import TestCase

from stats.utils.input_validator import is_input_valid

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

