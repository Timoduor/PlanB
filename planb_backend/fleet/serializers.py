from rest_framework import serializers
from .models import Car
from users.serializers import UserSerializer

class CarSerializer(serializers.ModelSerializer):
    owner_details = UserSerializer(source='owner', read_only=True)

    class Meta:
        model = Car
        fields = ['id', 'owner', 'owner_details', 'make', 'model', 'year', 'description', 'status', 'internal_budget', 'created_at', 'updated_at']
        read_only_fields = ['owner'] # Automatically set in view
