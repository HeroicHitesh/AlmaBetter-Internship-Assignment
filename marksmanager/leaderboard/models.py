from django.db import models
from django.core.validators import MaxValueValidator


class Leaderboard(models.Model):
    roll_no = models.EmailField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    maths_marks = models.PositiveIntegerField(
        default=1, validators=[MaxValueValidator(100)]
    )
    physics_marks = models.PositiveIntegerField(
        default=1, validators=[MaxValueValidator(100)]
    )
    chemistry_marks = models.PositiveIntegerField(
        default=1, validators=[MaxValueValidator(100)]
    )
    total_marks = models.PositiveIntegerField(
        default=1, validators=[MaxValueValidator(300)]
    )
    percentage = models.DecimalField(
        max_digits=3, decimal_places=2, default=1, validators=[MaxValueValidator(100)]
    )
    created_at = models.DateTimeField(auto_now_add=True)
