from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status

from .models import Person, Claim_work, Tech, certificates, soc_links
from .serializer import PersonSerializer, ClaimWorkSerializer

# Views for Person's data
class PersonsView(APIView):
    def get(self, request):
        persons = Person.objects.all()
        serializer = PersonSerializer(persons, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PersonView(APIView):
    def get(self, request, id):  
        try:
            person = Person.objects.get(id=id)
            serializer = PersonSerializer(person)
            return JsonResponse(serializer.data)
        except Person.DoesNotExist:
            return JsonResponse({"error": "Person with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id):
        try:
            person = Person.objects.get(id=id)
            serializer = PersonSerializer(person, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Person.DoesNotExist:
            return JsonResponse({"error": "Person with this ID not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        try:
            person = Person.objects.get(id=id)
            person.delete()
            return JsonResponse({"message": "Person deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Person.DoesNotExist:
            return JsonResponse({"error": "Person with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
        
# Views for ClaimWorks's data
class ClaimWoeksView(APIView):
    def get(self, request):
        claim_work = Claim_work.objects.all()
        serializer = ClaimWorkSerializer(claim_work, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = ClaimWorkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClaimWoekView(APIView):
    def get(self, request, id):  
        try:
            claim_work = Claim_work.objects.get(id=id)
            serializer = ClaimWorkSerializer(claim_work)
            return JsonResponse(serializer.data)
        except Person.DoesNotExist:
            return JsonResponse({"error": "Claim work with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id):
        try:
            claim_work = Claim_work.objects.get(id=id)
            serializer = ClaimWorkSerializer(claim_work, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Person.DoesNotExist:
            return JsonResponse({"error": "Claim work with this ID not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        try:
            claim_work = Claim_work.objects.get(id=id)
            claim_work.delete()
            return JsonResponse({"message": "Claim work deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Person.DoesNotExist:
            return JsonResponse({"error": "Claim work with this ID not found"}, status=status.HTTP_404_NOT_FOUND)