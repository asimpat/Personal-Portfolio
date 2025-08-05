from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Skill, Project, Experience, Contact, Resume
from .serializers import (
    SkillSerializer, ProjectSerializer,
    ExperienceSerializer, ContactSerializer, ResumeSerializer
)
from django.http import FileResponse
import os
from django.conf import settings


@api_view(['GET', 'POST'])
def get_skills(request):
   if request.method == 'GET':
    skills = Skill.objects.all()
    serializer = SkillSerializer(skills, many=True)
    return Response(serializer.data)
   elif request.method == 'POST':
    serializer = SkillSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET', 'POST'])
def get_projects(request):
   if request.method == 'GET':
    project = Project.objects.all()
    serializer = ProjectSerializer(project, many=True)
    return Response(serializer.data)
   elif request.method == 'POST':
    serializer = ProjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET', 'POST'])
def get_experience(request):
   if request.method == 'GET':
    current = request.query_params.get('current', None)
    if current is not None:
        experience = Experience.objects.filter(
            is_current=current.lower() == 'true')
    else:
        experience = Experience.objects.all()
        experience = Experience.objects.all()
        serializer = ExperienceSerializer(experience, many=True)
    return Response(serializer.data)
   elif request.method == 'POST':
    serializer = ExperienceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['POST', 'GET'])
def contact_submission(request):
    if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Submitted successfully"}, status=201)
        return Response(serializer.errors, status=400)

    elif request.method == 'GET':
        messages = Contact.objects.all().order_by('-created_at')
        serializer = ContactSerializer(messages, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def resume_upload(request):
    serializer = ResumeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET'])
def download_resume(request):
    """Download the active resume file"""
    resume = get_object_or_404(Resume, is_active=True)

    file_path = os.path.join(settings.MEDIA_ROOT, str(resume.file))
    if os.path.exists(file_path):
        response = FileResponse(open(file_path, 'rb'))
        response['Content-Disposition'] = f'attachment; filename="{resume.title}.pdf"'
        return response
    return Response({'error': 'Resume file not found'}, status=404)
