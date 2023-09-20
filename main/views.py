from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# returns the home page
def home(request):
    return HttpResponse("Hello World!")