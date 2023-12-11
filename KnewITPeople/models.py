import os
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Person(models.Model):
    name = models.CharField(max_length=128)
    age = models.IntegerField(default=0)
    phone = models.TextField(default=None)
    email = models.TextField(default=None)
    photo = models.ImageField(default=None)
    living_place = models.TextField(default=None)
    skills = models.TextField(default=None)
    languages= models.TextField(default=None)
    work_ex = models.TextField(default=None)
    certificate_knewit = models.BooleanField(default=False)
    Resume = models.FileField(upload_to='resume/', default=None)
    def __str__(self) -> str:
        return f'{self.name}'

class Claim_work(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE, default=None)
    stack = models.CharField(max_length=128)
    frame = models.CharField(max_length=128)
    desired_salary = models.IntegerField(default=0)
    def __str__(self) -> str:
        return f'{self.person.name}'

class Tech(models.Model):
    frame = models.TextField(default=None)
    stack = models.CharField(max_length=128)
    def __str__(self) -> str:
        return f'{self.stack}'
    
class soc_links(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    instagram = models.TextField(default=None)
    WPP = models.TextField(default=None)
    Github = models.TextField(default=None)
    twitter = models.TextField(default=None)
    def __str__(self) -> str:
        return f'{self.person.name}'

class certificates(models.Model):
    file = models.FileField(upload_to='certificates/')
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return f'{self.person.name}'
