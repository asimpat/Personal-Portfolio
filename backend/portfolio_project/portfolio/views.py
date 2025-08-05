from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Skill, Project, Experience, Contact, Resume
from .serializers import (
    SkillSerializer, ProjectSerializer,
    ExperienceSerializer, ContactSerializer, ResumeSerializer
)


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
    experience = Experience.objects.all()
    serializer = ExperienceSerializer(experience, many=True)
    return Response(serializer.data)
   elif request.method == 'POST':
    serializer = ExperienceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)
