import os
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status
from .models import Person, Claim_work, Tech, certificates, soc_links
from .serializer import *
from django.core.files.storage import default_storage

# Views for Person's data
class PersonsView(APIView):
    def get(self, request):
        persons = Person.objects.all()
        serializer = PersonSerializer(persons, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        # if request.data.photo  == 'null':
        #     mutable_post = request.POST.copy()
        #     mutable_post['photo'] = None
        if 'photo' in request.data and request.data['photo'] == 'null':
            # Если фото указано и его значение 'null', устанавливаем поле 'photo' в None
            mutable_post = request.POST.copy()
            mutable_post['photo'] = None

            serializer = PersonSerializer(data=mutable_post)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else :
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
            # Удаление связанного фото с хранилища
            if person.photo:
                file_path = person.photo.path
                # Убеждаемся, что файл существует перед удалением
                if os.path.exists(file_path):
                # Удаляем файл с сервера
                    os.remove(file_path)

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
        except Claim_work.DoesNotExist:
            return JsonResponse({"error": "Claim work with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id):
        try:
            claim_work = Claim_work.objects.get(id=id)
            serializer = ClaimWorkSerializer(claim_work, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Claim_work.DoesNotExist:
            return JsonResponse({"error": "Claim work with this ID not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        try:
            claim_work = Claim_work.objects.get(id=id)
            claim_work.delete()
            return JsonResponse({"message": "Claim work deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Claim_work.DoesNotExist:
            return JsonResponse({"error": "Claim work with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
        
# Views for Tech's data
class TechsView(APIView):
    def get(self, request):
        techs = Tech.objects.all()
        serializer = TechSerializer(techs, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = TechSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TechView(APIView):
    def get(self, request, id):  
        try:
            tech = Tech.objects.get(id=id)
            serializer = TechSerializer(tech)
            return JsonResponse(serializer.data)
        except Tech.DoesNotExist:
            return JsonResponse({"error": "Tech with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id):
        try:
            tech = Tech.objects.get(id=id)
            serializer = TechSerializer(tech, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Tech.DoesNotExist:
            return JsonResponse({"error": "Tech with this ID not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        try:
            tech = Tech.objects.get(id=id)
            tech.delete()
            return JsonResponse({"message": "Tech deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Tech.DoesNotExist:
            return JsonResponse({"error": "Tech with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
 
# Views for Soc links's data
class LinksView(APIView):
    def get(self, request):
        links = soc_links.objects.all()
        serializer = SocLinksSerializer(links, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = SocLinksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LinkView(APIView):
    def get(self, request, id):  
        try:
            link = soc_links.objects.get(id=id)
            serializer = SocLinksSerializer(link)
            return JsonResponse(serializer.data)
        except soc_links.DoesNotExist:
            return JsonResponse({"error": "Links with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id):
        try:
            link = soc_links.objects.get(id=id)
            serializer = SocLinksSerializer(link, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except soc_links.DoesNotExist:
            return JsonResponse({"error": "Links with this ID not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        try:
            link = soc_links.objects.get(id=id)
            link.delete()
            return JsonResponse({"message": "Links deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except soc_links.DoesNotExist:
            return JsonResponse({"error": "Links with this ID not found"}, status=status.HTTP_404_NOT_FOUND)

# Views for certificates's data
class CertificatesView(APIView):
    def get(self, request):
        certificate = certificates.objects.all()
        serializer = CertificatesSerializer(certificate, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = CertificatesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CertificateView(APIView):
    def get(self, request, id):  
        try:
            certificate = certificates.objects.get(id=id)
            serializer = CertificatesSerializer(certificate)
            return JsonResponse(serializer.data)
        except certificates.DoesNotExist:
            return JsonResponse({"error": "Certificate with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id):
        try:
            certificate = certificates.objects.get(id=id)
            serializer = CertificatesSerializer(certificate, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except certificates.DoesNotExist:
            return JsonResponse({"error": "Certificates with this ID not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        try:
            certificate = certificates.objects.get(id=id)
            certificate.delete()
            return JsonResponse({"message": "Certificates deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except certificates.DoesNotExist:
            return JsonResponse({"error": "Certificates with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
 

class CompaniesView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        # if request.data.photo  == 'null':
        #     mutable_post = request.POST.copy()
        #     mutable_post['photo'] = None
        if 'photo' in request.data and request.data['photo'] == 'null':
            # Если фото указано и его значение 'null', устанавливаем поле 'photo' в None
            mutable_post = request.POST.copy()
            mutable_post['photo'] = None

            serializer = CompanySerializer(data=mutable_post)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else :
            serializer = CompanySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CompanyView(APIView):
    def get(self, request, id):  
        try:
            company = Company.objects.get(id=id)
            serializer = CompanySerializer(company)
            return JsonResponse(serializer.data)
        except Company.DoesNotExist:
            return JsonResponse({"error": "Company with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id):
        try:
            company = Company.objects.get(id=id)
            serializer = CompanySerializer(company, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Company.DoesNotExist:
            return JsonResponse({"error": "Company with this ID not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        try:
            company = Company.objects.get(id=id)
            # Удаление связанного фото с хранилища
            if company.photo:
                file_path = company.photo.path
                # Убеждаемся, что файл существует перед удалением
                if os.path.exists(file_path):
                # Удаляем файл с сервера
                    os.remove(file_path)

            company.delete()
            return JsonResponse({"message": "Company deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Company.DoesNotExist:
            return JsonResponse({"error": "Company with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
        

class JobseekersView(APIView):
    def get(self, request, *args, **kwargs):
        data = {
            'Person': Person.objects.all(),
            'Work': Claim_work.objects.all(),
            'Tech': Tech.objects.all(),
            'SocLinks': soc_links.objects.all(),
            'Certificates': certificates.objects.all(),
            'Companies': Company.objects.all(),
            'Vacancies': Vacancy.objects.all(),
        }
        serializer = JobseekersSerializer(data)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)