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
            'living_place',
            'skills',
            'languages',
            'work_ex',
            'certificate_knewit',
            'Resume',
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
        ]
class CertificatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = certificates
        fields = [
            'id',
            'file',
            'person',
        ]


