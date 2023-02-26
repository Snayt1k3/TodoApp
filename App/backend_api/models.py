from django.db import models

# Create your models here.


class TodoModel(models.Model):
    title = models.CharField(max_length=100)
    time = models.DateField(auto_now_add=True)
    completed = models.BooleanField()
    key = models.CharField(max_length=100, blank=True)
