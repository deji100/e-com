# Generated by Django 4.0.4 on 2022-09-02 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0015_cartproduct_pro_exist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartproduct',
            name='pro_exist',
        ),
        migrations.AddField(
            model_name='cartproduct',
            name='date_created',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
