from django.urls import path
from iBIS_Api import views

urlpatterns = [
    path("", views.home, name='home'),
]