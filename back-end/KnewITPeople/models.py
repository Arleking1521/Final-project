import os
from django.db import models
from PIL import Image

class Person(models.Model):
    name = models.CharField(max_length=128)
    age = models.IntegerField(default=0)
    phone = models.TextField(default=None)
    email = models.TextField(default=None)
    photo = models.FileField(upload_to='photo/jobseekers/', default=None, null=True, blank=True)
    living_place = models.TextField(default=None)
    languages= models.TextField(default=None)
    work_ex = models.TextField(default=None, null=True, blank=True)
    certificate_knewit = models.BooleanField(default=False)
    def save(self, *args, **kwargs):
        # Проверяем, было ли предоставлено изображение
        if not self.photo:
            self.photo = None
        super().save(*args, **kwargs)
    def __str__(self) -> str:
        return f'{self.name}'

class Tech(models.Model):
    frame = models.TextField(default=None, null=True, blank=True)
    stack = models.CharField(max_length=128)
    def __str__(self) -> str:
        return f'{self.stack} | {self.frame}'

class Claim_work(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE, default=None)
    title = models.CharField(max_length=128)
    stack_frame = models.ManyToManyField('Tech', related_name='claim_works_frame')
    desired_salary = models.IntegerField(default=0)
    skills = models.TextField(default=None)
    def __str__(self) -> str:
        return f'{self.title}: {self.stack_frame}'

class soc_links(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    instagram = models.TextField(default=None)
    WPP = models.TextField(default=None)
    Github = models.TextField(default=None)
    twitter = models.TextField(default=None)
    resume = models.FileField(upload_to='resume/', default=None)
    def __str__(self) -> str:
        return f'{self.person.name}'

class certificates(models.Model):
    file = models.FileField(upload_to='certificates/', default=None)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        # Проверяем формат файла
        img = Image.open(self.file.path)
        if img.format not in ['JPEG', 'PNG', 'JPG']:
            # Если формат не соответствует JPEG или PNG, можно выбросить исключение или выполнить нужные действия
            raise ValueError('Формат файла должен быть JPEG или PNG')


    def __str__(self) -> str:
        return f'{self.person.name}'
