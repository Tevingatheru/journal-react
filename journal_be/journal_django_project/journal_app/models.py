from django.contrib.auth.models import User, Group
from django.db import models

CATEGORY_PERSONAL = 'Personal'
CATEGORY_WORK = 'Work'
CATEGORY_TRAVEL = 'Travel'

CATEGORIES = [
    CATEGORY_PERSONAL,
    CATEGORY_WORK,
    CATEGORY_TRAVEL,
]

class Journal(models.Model):
    user = models.ForeignKey(User, related_name='journals', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    category = models.CharField(
        max_length=100,
        choices=[(cat, cat.capitalize()) for cat in CATEGORIES],
        default=CATEGORY_PERSONAL,
    )
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} {self.category} {self.date}"
