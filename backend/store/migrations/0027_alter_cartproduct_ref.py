# Generated by Django 4.0.4 on 2022-09-23 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0026_remove_product_is_sold_out_remove_product_sort_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartproduct',
            name='ref',
            field=models.CharField(default=0, max_length=20),
        ),
    ]