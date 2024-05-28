from django.contrib import admin
from .models import *
from django import forms
from django.contrib.admin.widgets import FilteredSelectMultiple
# Register your models here.

class TechAdmin(admin.ModelAdmin):
    pass

class ClaimWorkAdmin(admin.ModelAdmin):
    filter_horizontal = ('stack_frame',)  # Множественный выбор для поля Frame


admin.site.register(Person)
admin.site.register(Tech, TechAdmin)
admin.site.register(Claim_work, ClaimWorkAdmin)
admin.site.register(soc_links)
admin.site.register(certificates)
