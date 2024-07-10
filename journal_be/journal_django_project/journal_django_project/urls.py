from django.contrib import admin
from django.urls import path, include
from journal_app.views import UserViewSet, JournalViewSet, GroupViewSet, CsrfTokenView
from rest_framework import routers
from django.views.decorators.csrf import csrf_exempt

router = routers.SimpleRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'journals', JournalViewSet, basename='journal')
router.register(r'groups', GroupViewSet, basename='group')

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
        path('csrf-token/', CsrfTokenView.as_view(), name='csrf-token'),

]

