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
            ]
        

class ClaimWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claim_work
        fields = [ 
            'id', 
            'person', 
            'stack', 
            'frame', 
            'desired_salary', 
            'skills',
            ]
        
class TechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tech
        fields = [
            'id',
            'frame',
            'stack',
        ]

class SocLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = soc_links
        fields = [
            'id',
            'person',
            'instagram',
            'WPP',
            'Github',
            'twitter',
            'resume',
        ]
class CertificatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = certificates
        fields = [
            'id',
            'file',
            'person',
        ]


