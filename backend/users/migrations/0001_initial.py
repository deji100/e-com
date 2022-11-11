# Generated by Django 4.0.4 on 2022-05-05 10:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', django_countries.fields.CountryField(max_length=2)),
                ('state', models.CharField(max_length=150)),
                ('city', models.CharField(max_length=150)),
                ('phone_code', models.CharField(blank=True, default='+', max_length=4, null=True)),
                ('phone', models.CharField(blank=True, help_text='Enter valid phone number.', max_length=20, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
