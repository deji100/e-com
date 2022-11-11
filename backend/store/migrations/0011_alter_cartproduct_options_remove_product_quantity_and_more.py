# Generated by Django 4.0.4 on 2022-07-22 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0010_alter_cartproduct_user_alter_orderedproduct_user'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cartproduct',
            options={'ordering': ['-id'], 'verbose_name_plural': 'Cart Products'},
        ),
        migrations.RemoveField(
            model_name='product',
            name='quantity',
        ),
        migrations.AddField(
            model_name='cartproduct',
            name='quantity',
            field=models.IntegerField(default=0),
        ),
    ]
