# Generated by Django 4.0.4 on 2022-05-05 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cartproduct',
            options={'verbose_name_plural': 'Cart Products'},
        ),
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name_plural': 'Categories'},
        ),
        migrations.AlterModelOptions(
            name='orderedproduct',
            options={'verbose_name_plural': 'Ordered Products'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name_plural': 'Products'},
        ),
        migrations.AlterModelOptions(
            name='savedproduct',
            options={'verbose_name_plural': 'Saved Products'},
        ),
        migrations.AddField(
            model_name='product',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
