#from main import views #importing the views.py file from the main app
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')) #this is the path to the home page
    #path('', views.home, name='home') #this is the path to the home page
]
