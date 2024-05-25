from django.shortcuts import render
from .models import Company, Vacancy
import os
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status
from .serializer import CompanySerializer, VacancySerializer

# Companies views
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
        

# Vacancies views
class VacanciesView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyView(APIView):
    def get(self, request, id):  
        try:
            vacancy = Vacancy.objects.get(id=id)
            serializer = CompanySerializer(vacancy)
            return JsonResponse(serializer.data)
        except Company.DoesNotExist:
            return JsonResponse({"error": "Vacancy with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
            serializer = VacancySerializer(vacancy, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Vacancy.DoesNotExist:
            return JsonResponse({"error": "Vacancy with this ID not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
            # Удаление связанного фото с хранилища
            

            vacancy.delete()
            return JsonResponse({"message": "Vacancy deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Vacancy.DoesNotExist:
            return JsonResponse({"error": "Vacancy with this ID not found"}, status=status.HTTP_404_NOT_FOUND)
        