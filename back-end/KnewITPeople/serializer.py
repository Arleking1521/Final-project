from rest_framework import serializers
from .models import *



class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = [ 
            'id', 
            'name', 
            'age', 
            'phone', 
            'email', 
            'photo',
            'living_place',
            'languages',
            'work_ex',
            'certificate_knewit',
            'certificates',
            'personal_qualities',
            ]
        

class ClaimWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claim_work
        fields = [ 
            'id', 
            'person', 
            'title', 
            'stack_frame', 
            'skills',
            ]
        
class TechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tech
        fields = [
            'id',
            'frame',
            'stack',
            'click_counter',
        ]

class SocLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = soc_links
        fields = [
            'id',
            'person',
            'telegram',
            'WPP',
            'Github',
            'linkedIn',
            'resume',
        ]
class CertificatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = certificates
        fields = [
            'id',
            'file',
        ]

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
            'stack_frame', 
            'date', 
            ]
   
class JobseekersSerializer(serializers.Serializer):
    Person = PersonSerializer(many=True, read_only=True)
    Work = ClaimWorkSerializer(many=True, read_only=True)
    Tech = TechSerializer(many=True, read_only=True)
    SocLinks = SocLinksSerializer(many=True, read_only=True)
    Certificates = CertificatesSerializer(many=True, read_only=True)
    Companies = CompanySerializer(many=True, read_only=True)
    Vacancies = VacancySerializer(many=True, read_only=True)