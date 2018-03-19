from rest_framework import viewsets
from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend

# import django_filters.rest_framework
from .models import *
from .serializers import *


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('id', 'username')


class EventViewSet(viewsets.ModelViewSet):
    """This class defines the create behavior of our rest api."""
    serializer_class = EventSerializer
    queryset = Event.objects.all()


class ForumViewSet(viewsets.ModelViewSet):
    serializer_class = ForumSerializer
    queryset = Forum.objects.all()


class DiscussionViewSet(viewsets.ModelViewSet):
    serializer_class = DiscussionSerializer
    queryset = Discussion.objects.all()
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('forum', 'pinned')


class DiscussionListViewSet(viewsets.ModelViewSet):
    serializer_class = DiscussionListSerializer
    queryset = Discussion.objects.all()
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('forum', 'pinned')


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('discussion', 'user')


class CommentListViewSet(viewsets.ModelViewSet):
    serializer_class = CommentListSerializer
    queryset = Comment.objects.all()
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('discussion', 'user')


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    queryset = User.objects.all()
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ()