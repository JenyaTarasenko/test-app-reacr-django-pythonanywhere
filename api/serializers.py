from rest_framework import serializers
from .models import Project
from django.conf import settings


class ProjectSerializer(serializers.ModelSerializer):
    
    # image = serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = ['id', 'name', 'slug', 'description', 'image', 'link', 'tehnology_project']
        