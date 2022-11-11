from django.shortcuts import render
from django.http import HttpResponse, QueryDict, JsonResponse
from .serializers import CartProductSerializer, CategorySerializer, ProductSerializer, SavedProductSerializer
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from .models import *

# Create your views here.

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CartProductList(generics.ListCreateAPIView):
    queryset = CartProduct.objects.all()
    serializer_class = CartProductSerializer

class SavedProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SavedProduct.objects.all()
    serializer_class = SavedProductSerializer

class SavedProductList(generics.ListCreateAPIView):
    queryset = SavedProduct.objects.all()
    serializer_class = SavedProductSerializer


# @api_view(['GET', 'POST'])
# def savedProducts(request, format=None):
#     if request.method == 'GET':
#         if request.user.is_authenticated:
#             savedProds = SavedProduct.objects.all()
#             serializer = SavedProductSerializer(savedProds, many=True)
#             return Response(serializer.data, safe=False)
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = SavedProductSerializer(data)
#         if serializer.is_valid():
#             serializer.save()   
#             return Response(serializer.data, status=201)
#     return Response(status=status.HTTP_400_BAD_REQUEST)

class CartProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CartProduct.objects.all()
    serializer_class = CartProductSerializer

class OrderedProductList(generics.ListCreateAPIView):
    queryset = OrderedProduct.objects.all()
    serializer_class = CartProductSerializer

class OrderedProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderedProduct.objects.all()
    serializer_class = CartProductSerializer