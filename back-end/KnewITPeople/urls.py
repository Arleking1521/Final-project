from django.urls import path
from . import views

urlpatterns = [
    path('', views.JobseekersView.as_view(), name='jobseekers_api'), 
    path('person/', views.PersonsView.as_view(), name='person_api'), 
    path('work/', views.ClaimWoeksView.as_view(), name='work_api'), 
    path('tech/', views.TechsView.as_view(), name='tech_api'),  
    path('link/', views.LinksView.as_view(), name='links_api'), 
    path('certificate/', views.CertificatesView.as_view(), name='certificates_api'), 
    path('person/<int:id>/', views.PersonView.as_view(), name='person_api_by_id'), 
    path('work/<int:id>/', views.ClaimWoekView.as_view(), name='work_api_by_id'), 
    path('tech/<int:id>/', views.TechView.as_view(), name='tech_api_by_id'), 
    path('link/<int:id>/', views.LinkView.as_view(), name='link_api_by_id'), 
    path('certificate/<int:id>/', views.CertificateView.as_view(), name='certificate_api_by_id'), 
    path('company/', views.CompaniesView.as_view(), name='company_api'), 
    path('company/<int:id>/', views.CompanyView.as_view(), name='person_api_by_id'), 
    path('clicks/', views.ClicksView.as_view(), name='clicks_api'), 
    
]