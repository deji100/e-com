from email.policy import HTTP
from re import A
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from users.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from django.contrib.auth.models import User
from .models import Profile
from .serializer import ProfileSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated


# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = AllowAny,
    serializer_class = RegisterSerializer

class ProfileView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def profiles(request):
#     if request.user.is_authenticated:
#         user= request.user
#     user_profile, new_user_profile = Profile.objects.get_or_create(user=user)
#     serializer = ProfileSerializer(user_profile)
#     return Response(serializer.data)
    

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request."
        return Response({'response': data})
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f"Congratulation your API just responded to POST request with text: {text}."
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status=status.HTTP_400_BAD_REQUEST)