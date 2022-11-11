from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Category)
admin.site.register(Column)
admin.site.register(Product)
admin.site.register(CartProduct)
admin.site.register(OrderedProduct)
admin.site.register(SavedProduct)
