# Generated by Django 4.2.1 on 2024-06-01 10:23

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0017_rename_frame_claim_work_stack_frame_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('website', models.CharField(blank=True, max_length=128, null=True)),
                ('photo', models.FileField(blank=True, default=None, null=True, upload_to='photo/companies/')),
                ('place', models.TextField(default=None)),
                ('description', models.TextField(default=None)),
                ('workers_count', models.IntegerField(default=1)),
                ('activity_areas', models.TextField(blank=True, default=None, null=True)),
                ('vacancies_count', models.IntegerField(default=0)),
            ],
        ),
        migrations.AlterField(
            model_name='tech',
            name='frame',
            field=models.TextField(blank=True, default=None),
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('payment', models.CharField(blank=True, default=None, null=True)),
                ('experience', models.CharField(default='Without')),
                ('busyness', models.CharField(default='None')),
                ('count_views', models.IntegerField(default=0)),
                ('title_desc', models.CharField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('offers', models.TextField()),
                ('duties', models.TextField()),
                ('requirements', models.TextField(default=None)),
                ('additionally', models.TextField(blank=True, default=None, null=True)),
                ('skills', models.CharField()),
                ('date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='KnewITPeople.company')),
                ('stack_frame', models.ManyToManyField(related_name='vacancy_frame', to='KnewITPeople.tech')),
            ],
        ),
    ]