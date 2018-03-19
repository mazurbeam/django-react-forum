from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

# Register your models here.
admin.site.register(Event)
admin.site.register(Forum)
admin.site.register(Discussion)
admin.site.register(Comment)
# admin.site.register(Profile)
admin.site.register(User, UserAdmin)