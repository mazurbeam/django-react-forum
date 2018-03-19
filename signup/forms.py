from django import forms
from django.contrib.auth.models import User

# from api.models import (Profile)



class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')


# class ProfileForm(forms.ModelForm):
#     class Meta:
#         model = Profile
#         fields = ('avatar_url', 'bio', 'birth_date', 'phone_number')
