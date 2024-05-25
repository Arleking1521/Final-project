from rest_framework import serializers
from .models import *

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = [ 
            'id', 
            'name', 
            'website', 
            'photo', 
            'place', 
            'description',
            'workers_count',
            'activity_areas',
            'vacancies_count',
            ]
        

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = [ 
            'id', 
            'company', 
            'name', 
            'payment', 
            'experience', 
            'busyness',
            'count_views', 
            'title_desc', 
            'description', 
            'offers', 
            'duties', 
            'requirements',
            'additionally', 
            'skills', 
            'stack', 
            'frame', 
            'date', 
            ]
   