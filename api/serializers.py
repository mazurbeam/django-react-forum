from rest_framework import serializers
from .models import *
# from django.contrib.auth.models import User


class UserPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def display_value(self, instance):
        return '%s' % (instance.username)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'bio','location',
                  'groups', 'user_permissions', 'is_staff', 'is_active',
                  'is_superuser', 'last_login', 'date_joined')
        read_only_fields = ('last_login', 'date_joined')


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'bio', 'location', 'avatar', 'is_staff')
        read_only_fields = ('last_login', 'date_joined')


class EventSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""

    class Meta:
        model = Event
        fields = ('id', 'name', 'start_date', 'end_date', 'banner',
                  'address', 'description')
        read_only_fields = ('created_at', 'updated_at')


class ForumSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""

    class Meta:
        model = Forum
        fields = ('id', 'name', 'created_at', 'updated_at')
        read_only_fields = ('created_at', 'updated_at')


class CommentSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""
    discussion = serializers.PrimaryKeyRelatedField(
        queryset=Discussion.objects.all())
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Comment
        fields = ('id', 'comment', 'discussion', 'user', 'created_at',
                  'updated_at')
        read_only_fields = ('created_at', 'updated_at')


class CommentListSerializer(serializers.ModelSerializer):
    discussion = serializers.PrimaryKeyRelatedField(
        queryset=Discussion.objects.all())
    user = UserSerializer(required=True)

    class Meta:
        model = Comment
        fields = ('id', 'comment', 'discussion', 'user', 'created_at',
                  'updated_at')
        read_only_fields = ('created_at', 'updated_at')


class DiscussionSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""
    forum = serializers.PrimaryKeyRelatedField(queryset=Forum.objects.all())
    created_by = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all())
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Discussion
        fields = ('id', 'forum', 'created_by', 'title', 'content', 'pinned',
                  'comments', 'created_at', 'updated_at')
        read_only_fields = ('created_at', 'updated_at')


class DiscussionListSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""
    forum = serializers.PrimaryKeyRelatedField(queryset=Forum.objects.all())
    created_by = serializers.StringRelatedField(many=False)
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Discussion
        fields = ('id', 'forum', 'created_by', 'title', 'content', 'pinned',
                  'comments', 'created_at', 'updated_at')
        read_only_fields = ('created_at', 'updated_at')
