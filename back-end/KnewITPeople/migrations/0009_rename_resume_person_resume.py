# Generated by Django 4.2.1 on 2023-12-14 20:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0008_alter_person_photo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='person',
            old_name='Resume',
            new_name='resume',
        ),
    ]
