# Generated by Django 4.2.1 on 2023-12-14 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0007_remove_certificates_image_remove_person_photo_binary_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='photo',
            field=models.FileField(default=None, upload_to='photo/'),
        ),
    ]
