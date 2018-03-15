from django.urls import path, include

from .views import MySignupView

urlpatterns = [
    path('', MySignupView.as_view(), name='signup'),
]