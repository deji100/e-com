# Generated by Django 4.0.4 on 2022-07-24 17:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0013_alter_cartproduct_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartproduct',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='store.product'),
        ),
    ]
