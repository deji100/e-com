from tkinter.tix import Tree
import uuid
from turtle import onclick
from django.db import models
from django.contrib.auth.models import User
from users.models import Profile

# Create your models here.

wear_sizes = (
    ('', ''),
    ('Small', 'S'),
    ('Medium', 'M'),
    ('Large', 'L'),
    ('X-Large', 'XL'),
)

shoe_sizes = (
    ('', ''),
    ('38', '38'),
    ('39', '39'),
    ('40', '40'),
    ('41', '41'),
    ('42', '42'),
    ('43', '43'),
    ('44', '44'),
    ('45', '45'),
)

photo_length = (
    ('Small', 'S'),
    ('Medium', 'M'),
    ('Large', 'L'),
    ('mid-wide', 'MW')
)

sexx = (
    ('unisex', 'U'),
    ('male', 'M'),
    ('female', 'F')
)

# sorts = (
#     ('Title', 'T'),
#     ('Category', 'G'),
#     ('Id', 'I'),
#     ('Photo_len', 'P'),
#     ('Sex', 'S'),
# )

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name_plural ="Categories"

class Column(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name_plural ="Columns"

class Product(models.Model):
    title = models.CharField(max_length=150, unique=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    brand = models.CharField(max_length=50, null=True, blank=True)
    column = models.ForeignKey(Column, on_delete=models.CASCADE, null=True, blank=True)
    wear_size = models.CharField(choices=wear_sizes, max_length=15, null=True, blank=True)
    shoe_size = models.CharField(choices=shoe_sizes, max_length=15, null=True, blank=True)
    description = models.TextField(max_length=500)
    price = models.IntegerField(default=0)
    photo = models.ImageField(blank=True, null=True)
    photo_len = models.CharField(choices=photo_length, max_length=15, null=True, blank=True)
    sample = models.BooleanField(default=False)
    sex = models.CharField(choices=sexx, max_length=15, null=True, blank=True)
    created = models.DateTimeField(auto_now=True)
    in_stock = models.BooleanField(default=True)
    slug = models.SlugField(unique=True, null=True, blank=True)

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        self.slug = str(self.category) + '-' + self.title
        super().save(*args, **kwargs)


    class Meta:
        ordering = ['-id']
        verbose_name_plural ="Products"

class SavedProduct(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.product.title

    class Meta:
        # ordering = ['-id']
        verbose_name_plural ="Saved Products"

class CartProduct(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    date_created = models.DateTimeField(auto_now=True)
    amount = models.IntegerField(default=0)
    ref = models.CharField(max_length=50, default=0)

    def __str__(self) -> str:
        return self.product.title

    def save(self, *args, **kwargs):
        total = self.product.price * self.quantity
        self.amount = total
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural ="Cart Products"
        ordering = ['-id']

class OrderedProduct(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    order_date = models.DateTimeField(auto_now=True)
    delivered = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.product

    class Meta:
        verbose_name_plural ="Ordered Products"
        ordering = ['-id']