from django.urls import path
from iBIS_App import views

urlpatterns = [
    path("", views.home, name='home'),
    path("/api/", views.api_call, name='api')
]

