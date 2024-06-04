import os
from django.db import models
from PIL import Image
from django.utils import timezone

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

class Person(models.Model):
    name = models.CharField(max_length=128)
    age = models.IntegerField(default=0)
    phone = models.TextField(default=None)
    email = models.TextField(default=None)
    photo = models.FileField(upload_to='photo/jobseekers/', default=None, null=True, blank=True)
    living_place = models.TextField(default=None)
    languages= models.TextField(default=None)
    work_ex = models.TextField(default=None, null=True, blank=True)
    personal_qualities = models.TextField(default=None, null=True, blank=True)
    certificate_knewit = models.BooleanField(default=False)
    certificates = models.ManyToManyField('certificates', related_name='certificates_person', blank=True)
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



class Company(models.Model):
    name = models.CharField(max_length=128)
    website = models.CharField(max_length=128, blank=True, null=True,)
    photo = models.FileField(upload_to='photo/companies/', default=None, null=True, blank=True)
    place = models.TextField(default=None)
    description= models.TextField(default=None)
    workers_count = models.IntegerField(default=1)
    activity_areas = models.TextField(default=None, null=True, blank=True)
    vacancies_count = models.IntegerField(default=0)
    def save(self, *args, **kwargs):
        # Проверяем, было ли предоставлено изображение
        if not self.photo:
            self.photo = None
        super().save(*args, **kwargs)
    def __str__(self) -> str:
        return f'{self.name}'
    
class Vacancy(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField( max_length=128)
    payment = models.CharField(default=None, blank=True, null=True)
    experience = models.CharField(default='Without')
    busyness = models.CharField(default='None')
    count_views = models.IntegerField(default=0)
    title_desc = models.CharField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    offers = models.TextField()
    duties = models.TextField()
    requirements = models.TextField(default=None)
    additionally = models.TextField(default=None, blank=True, null=True)
    skills = models.CharField()
    stack_frame = models.ManyToManyField(Tech, related_name='vacancy_frame')
    date = models.DateTimeField(default=timezone.now, verbose_name='Date')

    def save(self, *args, **kwargs):
        # Увеличиваем счетчик вакансий у компании при создании новой вакансии
        if not self.pk:  # Если вакансия еще не была сохранена
            self.company.vacancies_count += 1
            self.company.save()
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        # Уменьшаем счетчик вакансий у компании при удалении вакансии
        company = self.company
        super().delete(*args, **kwargs)
        company.vacancies_count -= 1
        company.save()

    def __str__(self) -> str:
        return f'{self.name}'
    
