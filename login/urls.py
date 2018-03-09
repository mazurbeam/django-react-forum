from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from . import views

urlpatterns = [path('', views.login)]
