from django.shortcuts import render
from django.http import HttpResponse
from .models import Youtube, Github

# Create your views here.

# returns the home page
def home(request):
    videos = Youtube.objects.all()
    repos = Github.objects.all()
    context = {
        'videos': videos,
        'repos': repos
    }
    return render(request, 'main/home.html', context)

def about(request):
    return render(request, 'main/about.html')