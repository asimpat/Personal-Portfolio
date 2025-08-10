# urls.py

from django.urls import path

from .views import get_skills, get_projects, get_experience, contact_submission, download_resume, update_skill


urlpatterns = [
    path('skills/', get_skills, name='get_skills'),
    path('projects/', get_projects, name='projects'),
    path('experiences/', get_experience, name='get_experience'),
    path('contacts/', contact_submission, name='contacts'),
    path('resumes/', download_resume, name='resumes'),
    path('skills/<int:pk>/', update_skill),
]