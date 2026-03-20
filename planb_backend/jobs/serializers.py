from rest_framework import serializers
from .models import JobPosting, JobApplication
from users.serializers import UserSerializer
from fleet.serializers import CarSerializer

class JobPostingSerializer(serializers.ModelSerializer):
    client_details = UserSerializer(source='client', read_only=True)
    car_details = CarSerializer(source='car', read_only=True)

    class Meta:
        model = JobPosting
        fields = ['id', 'client', 'client_details', 'car', 'car_details', 'title', 'description', 'date_needed', 'hours_needed', 'status', 'created_at']
        read_only_fields = ['client']

class JobApplicationSerializer(serializers.ModelSerializer):
    driver_details = UserSerializer(source='driver', read_only=True)

    class Meta:
        model = JobApplication
        fields = ['id', 'job', 'driver', 'driver_details', 'status', 'applied_at']
        read_only_fields = ['driver']
