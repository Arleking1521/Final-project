from django.urls import path, include

urlpatterns = [
    path('jobseekers/', include('KnewITPeople.urls')),
    path('vacancies/', include('vacancies.urls')),
]