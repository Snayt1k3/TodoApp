# Generated by Django 4.1.7 on 2023-02-16 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0003_alter_todomodel_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todomodel',
            name='time',
            field=models.DateTimeField(),
        ),
    ]
