# Generated by Django 4.0.4 on 2022-10-02 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0029_alter_savedproduct_options_remove_savedproduct_saved'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartproduct',
            name='ref',
            field=models.CharField(default=0, max_length=50),
        ),
    ]
