# Generated by Django 4.2.1 on 2024-05-28 19:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('KnewITPeople', '0014_remove_claim_work_frame_remove_claim_work_stack_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='claim_work',
            name='stack',
        ),
        migrations.AddField(
            model_name='claim_work',
            name='stack',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='claim_works_stack', to='KnewITPeople.tech'),
            preserve_default=False,
        ),
    ]
