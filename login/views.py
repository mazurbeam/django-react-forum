# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_401_UNAUTHORIZED
from rest_framework.authtoken.models import Token
from django.shortcuts import render


# Create your views here.
@api_view(["POST"])
def login(request):
    username = request.data.get('username')
    password = request.data.get("password")
    print(username)
    user = authenticate(username=username, password=password)
    if not user:
        return Response(
            {
                "error": "Login failed"
            }, status=HTTP_401_UNAUTHORIZED)

    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key})
