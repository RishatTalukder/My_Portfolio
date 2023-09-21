from django.shortcuts import render
from django.http import HttpResponse
from .models import Youtube

# Create your views here.

# returns the home page
def home(request):
    videos = Youtube.objects.all()
    context = {
        'videos': videos
    }
    return render(request, 'main/home.html', context)

def about(request):
    return render(request, 'main/about.html')