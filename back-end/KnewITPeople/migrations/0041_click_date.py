# Generated by Django 4.2.1 on 2024-06-06 11:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0040_alter_person_work_ex'),
    ]

    operations = [
        migrations.CreateModel(
            name='click_date',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now=True)),
                ('tech', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='KnewITPeople.tech')),
            ],
        ),
    ]
