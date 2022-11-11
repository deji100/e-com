# Generated by Django 4.0.4 on 2022-05-06 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_alter_product_shoe_size_alter_product_wear_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='shoe_size',
            field=models.CharField(choices=[('', ''), ('38', '38'), ('39', '39'), ('40', '40'), ('41', '41'), ('42', '42'), ('43', '43'), ('44', '44'), ('45', '45')], max_length=15),
        ),
        migrations.AlterField(
            model_name='product',
            name='wear_size',
            field=models.CharField(choices=[('', ''), ('Small', 'S'), ('Medium', 'M'), ('Large', 'L'), ('X-Large', 'XL')], max_length=15),
        ),
    ]