# Generated by Django 4.1.7 on 2023-02-16 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todomodel',
            name='key',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='todomodel',
            name='time',
            field=models.TimeField(auto_now=True),
        ),
    ]
