from tokenize import blank_re
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True)
    country = CountryField()
    state = models.CharField(max_length=150, null=True, blank=True)
    city = models.CharField(max_length=150, null=True, blank=True)
    phone_code = models.CharField(max_length=4, blank=True, null=True, default="+")
    phone = models.CharField(max_length=20, blank=True, null=True, help_text="Enter valid phone number.")

    def __str__(self) -> str:
        return self.user.username