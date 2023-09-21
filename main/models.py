from django.db import models

# Create your models here.

class Youtube(models.Model):
    url = models.CharField(max_length=200)
    title = models.CharField(max_length=100)
    description = models.TextField()
    video_id = models.CharField(max_length=100)
    thumbnail = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class Github(models.Model):
    url = models.CharField(max_length=200)
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title