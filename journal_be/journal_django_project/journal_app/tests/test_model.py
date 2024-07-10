from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
import datetime

from journal_app.models import CATEGORY_PERSONAL, Journal, CATEGORY_WORK, CATEGORY_TRAVEL


class JournalModelTest(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')
        
    def test_journal_creation(self):
        """Test creating a journal."""
        journal = Journal.objects.create(user=self.user, title="Test Journal", content="This is a test.", category=CATEGORY_PERSONAL)
        self.assertEqual(Journal.objects.count(), 1)
        self.assertEqual(journal.title, "Test Journal")
        self.assertEqual(journal.content, "This is a test.")
        self.assertEqual(journal.category, CATEGORY_PERSONAL)

    def test_journal_retrieval(self):
        """Test retrieving a journal."""
        journal = Journal.objects.create(user=self.user, title="Another Test Journal", content="Another test.", category=CATEGORY_WORK)
        retrieved_journal = Journal.objects.get(id=journal.id)
        self.assertEqual(retrieved_journal.title, "Another Test Journal")
        self.assertEqual(retrieved_journal.content, "Another test.")
        self.assertEqual(retrieved_journal.category, CATEGORY_WORK)

    def test_journal_deletion(self):
        """Test deleting a journal."""
        journal = Journal.objects.create(user=self.user, title="Yet Another Test Journal", content="Yet another test.", category=CATEGORY_TRAVEL)
        deleted_journal_count = Journal.objects.filter(id=journal.id).count()
        self.assertEqual(deleted_journal_count, 1)
        journal.delete()
        remaining_journal_count = Journal.objects.filter(id=journal.id).count()
        self.assertEqual(remaining_journal_count, 0)

