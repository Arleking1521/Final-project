# Generated by Django 4.2.1 on 2023-12-14 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0006_remove_person_photo_person_photo_binary'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='certificates',
            name='image',
        ),
        migrations.RemoveField(
            model_name='person',
            name='photo_binary',
        ),
        migrations.AddField(
            model_name='certificates',
            name='file',
            field=models.FileField(default=None, upload_to='certificates/'),
        ),
        migrations.AddField(
            model_name='person',
            name='photo',
            field=models.ImageField(default=None, upload_to='photo/'),
        ),
    ]
