from rest_framework import serializers
from .models import *



class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = [ 
            'id', 
            'company',
            'name', 
            'age', 
            'phone', 
            'email', 
            'photo',
            'living_place',
            'languages',
            'work_ex',
            'personal_qualities',
            'certificate_knewit',
            'certificates',
            'company_employee',
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
            'company',
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
            'full_name',
            'website', 
            'email', 
            'iin',
            'phone',
            'place', 
            'logo_light',
            'logo_dark',
            'main_color_hex',
            'secondary_color_hex',
            ]
        
   
class JobseekersSerializer(serializers.Serializer):
    Person = PersonSerializer(many=True, read_only=True)
    Work = ClaimWorkSerializer(many=True, read_only=True)
    Tech = TechSerializer(many=True, read_only=True)
    SocLinks = SocLinksSerializer(many=True, read_only=True)
    Certificates = CertificatesSerializer(many=True, read_only=True)
    Companies = CompanySerializer(many=True, read_only=True)