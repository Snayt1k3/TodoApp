from django.contrib import admin
from django.urls import path, include
from .views import *
urlpatterns = [
    path('todo_list/', TodoApi.as_view())
]
