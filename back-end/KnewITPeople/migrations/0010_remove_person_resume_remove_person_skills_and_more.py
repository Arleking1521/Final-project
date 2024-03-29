# Generated by Django 4.2.1 on 2024-01-31 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0009_rename_resume_person_resume'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='resume',
        ),
        migrations.RemoveField(
            model_name='person',
            name='skills',
        ),
        migrations.AddField(
            model_name='claim_work',
            name='skills',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='soc_links',
            name='resume',
            field=models.FileField(default=None, upload_to='resume/'),
        ),
    ]
