# Generated by Django 4.2.1 on 2023-12-11 11:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0002_claim_work_soc_links'),
    ]

    operations = [
        migrations.AddField(
            model_name='claim_work',
            name='desired_salary',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='claim_work',
            name='person',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='KnewITPeople.person'),
        ),
        migrations.AddField(
            model_name='person',
            name='Resume',
            field=models.FileField(default=None, upload_to='resume/'),
        ),
        migrations.AddField(
            model_name='person',
            name='age',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='person',
            name='email',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='person',
            name='languages',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='person',
            name='living_place',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='person',
            name='phone',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='person',
            name='photo',
            field=models.ImageField(default=None, upload_to=''),
        ),
        migrations.AddField(
            model_name='person',
            name='skills',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='person',
            name='work_ex',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='soc_links',
            name='Github',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='soc_links',
            name='WPP',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='soc_links',
            name='instagram',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='soc_links',
            name='twitter',
            field=models.TextField(default=None),
        ),
        migrations.CreateModel(
            name='certificates',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='certificates/')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='KnewITPeople.person')),
            ],
        ),
    ]
