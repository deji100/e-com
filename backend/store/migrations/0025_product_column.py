# Generated by Django 4.0.4 on 2022-09-20 00:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0024_column'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='column',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='store.column'),
        ),
    ]