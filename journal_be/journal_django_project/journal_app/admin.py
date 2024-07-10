from django.contrib import admin

from .models import Journal

# Register your models here.
@admin.register(Journal)
class JournalAdmin(admin.ModelAdmin):
    list_filter = ('category','date')
    fields = ['user', 'title', 'content', 'category',]