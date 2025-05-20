from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Project
from .serializers import ProjectSerializer

# обязвательно должна быть view чтобы подхватывала после сборки 
# urlpatterns += [
#     re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
# ]
# def index(request):
#     return render(request, 'index.html')


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