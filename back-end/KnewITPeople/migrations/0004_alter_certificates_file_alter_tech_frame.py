# Generated by Django 4.2.1 on 2023-12-14 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0003_claim_work_desired_salary_claim_work_person_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certificates',
            name='file',
            field=models.BinaryField(),
        ),
        migrations.AlterField(
            model_name='tech',
            name='frame',
            field=models.TextField(default=None),
        ),
    ]
