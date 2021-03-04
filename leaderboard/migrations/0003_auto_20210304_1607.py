# Generated by Django 3.1.7 on 2021-03-04 16:07

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leaderboard', '0002_auto_20210304_0214'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leaderboard',
            name='percentage',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=5, validators=[django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AlterField(
            model_name='leaderboard',
            name='roll_no',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
