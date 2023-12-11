from django.urls import path
from . import views

urlpatterns = [
    path('person/', views.PersonsView.as_view(), name='person_api'), 
    path('work/', views.ClaimWoeksView.as_view(), name='work_api'), 
    path('person/<int:id>/', views.PersonView.as_view(), name='person_api_by_id'), 
    path('work/<int:id>/', views.ClaimWoekView.as_view(), name='work_api_by_id'), 
]