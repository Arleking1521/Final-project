# Generated by Django 4.2.1 on 2024-06-04 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0030_remove_vacancy_skills'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='company_employee',
            field=models.CharField(blank=True, default=None),
        ),
        migrations.DeleteModel(
            name='Vacancy',
        ),
    ]