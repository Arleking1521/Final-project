# Generated by Django 4.2.1 on 2024-06-03 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0024_alter_soc_links_linkedin'),
    ]

    operations = [
        migrations.AddField(
            model_name='tech',
            name='click_counter',
            field=models.BigIntegerField(blank=True, default=0),
        ),
    ]