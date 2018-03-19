from django.urls import path, include

from .views import *

urlpatterns = [
    path('', MySignupView.as_view(), name='signup'),
    path('profile', update_profile, name='update_profile'),
]
