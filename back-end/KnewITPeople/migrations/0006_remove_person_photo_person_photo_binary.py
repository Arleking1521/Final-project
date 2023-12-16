# Generated by Django 4.2.1 on 2023-12-14 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0005_rename_file_certificates_image_alter_person_photo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='photo',
        ),
        migrations.AddField(
            model_name='person',
            name='photo_binary',
            field=models.BinaryField(default=None),
        ),
    ]
