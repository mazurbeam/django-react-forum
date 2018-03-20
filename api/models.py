from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver


class EventManager(models.Manager):
    pass


class ForumManager(models.Manager):
    pass


class DisccussionManager(models.Manager):
    pass


class CommentManager(models.Manager):
    pass


class UserProfileManager(models.Manager):
    pass


class User(AbstractUser):
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    avatar = models.ImageField(upload_to='images/profile/', blank=True)

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    banner = models.ImageField( upload_to='images/events/banners', blank=True, null=True)
    address = models.CharField(max_length=400, blank=True)
    description = models.TextField(max_length=2000, blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    objects = EventManager()

    def __str__(self):
        return self.name


class Forum(models.Model):
    name = models.CharField(max_length=200)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    objects = ForumManager()

    def __str__(self):
        return self.name


class Discussion(models.Model):
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=400)
    forum = models.ForeignKey(
        Forum, related_name='discussions', on_delete=models.CASCADE)
    created_by = models.ForeignKey(
        User, related_name='discussions', on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    pinned = models.BooleanField(default=False)
    objects = DisccussionManager()

    def __str__(self):
        return self.title


class Comment(models.Model):
    comment = models.CharField(max_length=400)
    discussion = models.ForeignKey(
        Discussion,
        related_name='discussion_comments',
        on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, related_name='user_comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CommentManager()


# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     avatar_url = models.ImageField( upload_to='images/profile/', blank=True)
#     bio = models.CharField(max_length=1000, blank=True)
#     birth_date = models.DateField(null=True, blank=True)
#     phone_number = models.CharField(max_length=50, blank=True)
#     location = models.CharField(max_length=30, blank=True)
#     skills = models.CharField(max_length=400, blank=True)
#     membership_status = models.CharField(max_length=50)

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)
#
# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
