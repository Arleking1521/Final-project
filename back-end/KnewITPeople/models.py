import os
from django.db import models
from PIL import Image
from django.utils import timezone
from django.core.validators import MinLengthValidator

class certificates(models.Model):
    file = models.FileField(upload_to='certificates/', default=None)
    person_name = models.CharField(max_length=128, default="Unknown")
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        # Проверяем формат файла
        img = Image.open(self.file.path)
        if img.format not in ['JPEG', 'PNG', 'JPG']:
            # Если формат не соответствует JPEG или PNG, можно выбросить исключение или выполнить нужные действия
            raise ValueError('Формат файла должен быть JPEG или PNG')


    def __str__(self) -> str:
        return f'{self.person_name}'
    
class Company(models.Model):
    name = models.CharField(max_length=128)
    full_name = models.CharField(max_length=128)
    website = models.CharField(max_length=128)
    email = models.TextField(default=None)
    iin = models.CharField(max_length=128)
    phone = models.CharField(max_length=20)
    place = models.TextField(default=None)
    logo_light = models.FileField(upload_to='photo/companies/', default=None, null=True, blank=True)
    logo_dark = models.FileField(upload_to='photo/companies/', default=None, null=True, blank=True)
    main_color_hex = models.CharField(max_length=7, validators=[MinLengthValidator(7)], default="#FFFFFF")
    secondary_color_hex = models.CharField(max_length=7, validators=[MinLengthValidator(7)], default="#FFFFFF")
    facebook = models.TextField(default=None, blank=True)
    youtube = models.TextField(default=None, blank=True)
    instagram = models.TextField(default=None, blank=True)
    def save(self, *args, **kwargs):
        # Проверяем, было ли предоставлено изображение
        if not self.logo_light:
            self.logo_light = None
        if not self.logo_dark:
            self.logo_dark = None
        super().save(*args, **kwargs)
    def __str__(self) -> str:
        return f'{self.name}'

class Person(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, default=None)
    name = models.CharField(max_length=128)
    age = models.CharField(max_length=10)
    phone = models.TextField(default=None)
    email = models.TextField(default=None)
    photo = models.FileField(upload_to='photo/jobseekers/', default=None, null=True, blank=True)
    living_place = models.TextField(default=None)
    languages= models.TextField(default=None)
    work_ex = models.TextField(default="Без опыта", null=True, blank=True)
    personal_qualities = models.TextField(default=None, null=True, blank=True)
    certificate_knewit = models.BooleanField(default=False)
    company_employee = models.CharField(default=None, blank=True, null=True)
    position = models.CharField(default=None, blank=True, null=True)
    certificates = models.ManyToManyField('certificates', related_name='certificates_person', blank=True)
    def save(self, *args, **kwargs):
        # Проверяем, было ли предоставлено изображение
        if not self.photo:
            self.photo = None
        super().save(*args, **kwargs)
    def __str__(self) -> str:
        return f'{self.name}'
    

class Tech(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, default=None)
    frame = models.TextField(default=None, null=True, blank=True)
    stack = models.CharField(max_length=128)
    click_counter = models.BigIntegerField( default=0, blank=True)
    def __str__(self) -> str:
        return f'{self.stack} | {self.frame}'

class Claim_work(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE, default=None)
    title = models.CharField(max_length=128)
    stack_frame = models.ManyToManyField('Tech', related_name='claim_works_frame')
    skills = models.TextField(default=None)
    def __str__(self) -> str:
        return f'{self.title}: {self.stack_frame}'

class soc_links(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    telegram = models.TextField(default=None, blank=True)
    WPP = models.TextField(default=None, blank=True)
    Github = models.TextField(default=None, blank=True)
    linkedIn = models.TextField(default=None, blank=True, null=True)
    resume = models.FileField(upload_to='resume/', default=None, blank=True)
    def __str__(self) -> str:
        return f'{self.person.name}'
