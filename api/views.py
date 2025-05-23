from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Project
from .serializers import ProjectSerializer
from django.shortcuts import get_object_or_404


# все проекты   
class ProjectListAPIViev(APIView):
    
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True, context={'request': request})
        return Response(serializer.data)
    
    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None
    
class ProjectDetailView(APIView):
    
    def get(self, request, slug):
        project = get_object_or_404(Project, slug=slug)
        serializer =  ProjectSerializer(project, context={'request': request})
        return Response(serializer.data)
        
  
    