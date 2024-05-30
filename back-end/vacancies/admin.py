from django.contrib import admin
from .models import Company, Vacancy
from KnewITPeople.models import Tech
# Register your models here.
class TechAdmin(admin.ModelAdmin):
    pass

class VacancyAdmin(admin.ModelAdmin):
    filter_horizontal = ('stack_frame',)  # Множественный выбор для поля Frame

admin.site.register(Company)
admin.site.register(Vacancy, VacancyAdmin)