from rest_framework import serializers
from .models import User, DriverProfile, ClientProfile

class DriverProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DriverProfile
        fields = ['id_number', 'profile_picture', 'driving_license', 'good_conduct_cert', 'is_verified']

class ClientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        fields = ['entity_name']

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    driver_profile = DriverProfileSerializer(read_only=True)
    client_profile = ClientProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name', 'role', 'phone_number', 'has_paid_registration', 'driver_profile', 'client_profile']
        read_only_fields = ['has_paid_registration']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = super().create(validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user
