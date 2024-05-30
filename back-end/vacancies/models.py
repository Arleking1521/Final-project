from django.db import models
from django.utils import timezone
from KnewITPeople.models import Tech
# Create your models here.
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
    def __str__(self) -> str:
        return f'{self.name}'
    
