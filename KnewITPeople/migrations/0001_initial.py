# Generated by Django 4.2.1 on 2023-12-10 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('certificate_knewit', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Tech',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('frame', models.CharField(max_length=128)),
                ('stack', models.CharField(max_length=128)),
            ],
        ),
    ]
