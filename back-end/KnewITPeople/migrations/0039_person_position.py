# Generated by Django 4.2.1 on 2024-06-05 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0038_alter_person_age'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='position',
            field=models.CharField(blank=True, default=None, null=True),
        ),
    ]