from django.contrib import admin
from .models import *
from django import forms
from django.contrib.admin.widgets import FilteredSelectMultiple
# Register your models here.

class TechAdminForm(forms.ModelForm):
    class Meta:
        model = Tech
        fields = '__all__'
        exclude = ['click_counter']

class TechAdmin(admin.ModelAdmin):
    form = TechAdminForm
    list_display = ('stack', 'frame')  # Укажите поля, которые вы хотите отображать в списке
    search_fields = ('stack', 'frame')  # Укажите поля, по которым можно искать

class ClaimWorkAdmin(admin.ModelAdmin):
    filter_horizontal = ('stack_frame',)  # Множественный выбор для поля Frame

class CertificatesAdmin(admin.ModelAdmin):
    pass

class PersonAdmin(admin.ModelAdmin):
    filter_horizontal = ('certificates',)  # Множественный выбор для поля Frame

admin.site.register(Person, PersonAdmin)
admin.site.register(Tech, TechAdmin)
admin.site.register(Claim_work, ClaimWorkAdmin)
admin.site.register(soc_links)
admin.site.register(certificates, CertificatesAdmin)
admin.site.register(Company)
