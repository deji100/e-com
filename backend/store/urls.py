from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProductList.as_view()),
    path('products-categories/', views.CategoryList.as_view()),
    path('products-categories/<pk>', views.CategoryDetail.as_view()),
    path('products/<pk>', views.ProductDetail.as_view()),
    path('cart-products/', views.CartProductList.as_view()),
    path('saved-products/', views.SavedProductList.as_view(), name='savedProducts'),
    path('saved-products/<pk>', views.SavedProductDetail.as_view(), name='savedProduct'),
    path('cart-products/<pk>', views.CartProductDetail.as_view()),
    path('ordered-products/', views.OrderedProductList.as_view()),
    path('ordered-products/<pk>', views.OrderedProductDetail.as_view()),
]
