from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('profiles/', views.profiles, name='profiles'),
    path('profiles/', views.ProfileView.as_view(), name='profiles'),
    path('token/refresh/', TokenRefreshView.as_view(), name='index'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test')
]
