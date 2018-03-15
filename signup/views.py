from django.shortcuts import render

from allauth.account.views import SignupView

class MySignupView(SignupView):
    template_name = 'signup.html'

