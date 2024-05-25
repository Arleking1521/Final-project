from django.urls import path
from . import views

urlpatterns = [
    path('company/', views.CompaniesView.as_view(), name='person_api'), 
    path('vacancy/', views.VacanciesView.as_view(), name='work_api'), 
    path('company/<int:id>/', views.CompanyView.as_view(), name='person_api_by_id'), 
    path('vacancy/<int:id>/', views.VacancyView.as_view(), name='work_api_by_id'), 
]