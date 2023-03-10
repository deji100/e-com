# Generated by Django 4.0.4 on 2022-09-19 04:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0020_product_photo_len_product_sample'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='sex',
            field=models.CharField(blank=True, choices=[('', ''), ('Male', 'M'), ('Female', 'F')], max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='photo_len',
            field=models.CharField(blank=True, choices=[('', ''), ('Small', 'S'), ('Medium', 'M'), ('Large', 'L')], max_length=15, null=True),
        ),
    ]
