import os
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Person(models.Model):
    name = models.CharField(max_length=128)
    age = models.IntegerField
    phone = models.TextField
    email = models.TextField
    photo = models.ImageField
    living_place = models.TextField
    skills = models.TextField
    languages= models.TextField
    work_ex = models.TextField
    # certificates
    certificate_knewit = models.BooleanField(default=False)
    # Resume
    # Claim_work = models.ForeignKey(Claim_work, on_delete=models.???)

class Claim_work(models.Model):
    stack = models.CharField(max_length=128)
    frame = models.CharField(max_length=128)
    desired_salary = models.IntegerField

class Tech(models.Model):
    frame = models.CharField(max_length=128)
    stack = models.CharField(max_length=128)

class soc_links(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    instagram = models.TextField
    WPP = models.TextField
    Github = models.TextField
    twitter = models.TextField