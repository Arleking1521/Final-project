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
    # soc_links
    living_place = models.TextField
    skills = models.TextField
    languages= models.TextField
    work_ex = models.TextField
    # certificates
    certificate_knewit = models.BooleanField(default=False)
    # Resume
    # Claim_work

class



# Create your models here.
