# Generated by Django 3.1.7 on 2021-03-04 02:11

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Leaderboard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roll_no', models.EmailField(max_length=100, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('maths_marks', models.PositiveIntegerField(default=1, validators=[django.core.validators.MaxValueValidator(100)])),
                ('physics_marks', models.PositiveIntegerField(default=1, validators=[django.core.validators.MaxValueValidator(100)])),
                ('chemistry_marks', models.PositiveIntegerField(default=1, validators=[django.core.validators.MaxValueValidator(100)])),
                ('total_marks', models.PositiveIntegerField(default=1, validators=[django.core.validators.MaxValueValidator(300)])),
                ('percentage', models.PositiveIntegerField(default=1, validators=[django.core.validators.MaxValueValidator(100)])),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
