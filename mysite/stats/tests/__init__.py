import unittest


def suite():
    return unittest.TestLoader().discover("stats.tests", pattern="*.py")

