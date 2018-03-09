# api/urls.py

from django.urls import path, include, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'users', views.UserViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'forums', views.ForumViewSet)
router.register(r'discussion', views.DiscussionViewSet)
router.register(r'discussions', views.DiscussionListViewSet)
router.register(r'comment', views.CommentViewSet)
router.register(r'comments', views.CommentListViewSet)
router.register(r'profiles', views.ProfileViewSet)

urlpatterns = [path('', include(router.urls))]
