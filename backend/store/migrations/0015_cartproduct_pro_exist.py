# Generated by Django 4.0.4 on 2022-07-25 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0014_alter_cartproduct_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='cartproduct',
            name='pro_exist',
            field=models.BooleanField(default=True),
        ),
    ]