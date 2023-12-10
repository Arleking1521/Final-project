# Generated by Django 4.2.1 on 2023-12-10 19:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Claim_work',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stack', models.CharField(max_length=128)),
                ('frame', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='soc_links',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='KnewITPeople.person')),
            ],
        ),
    ]