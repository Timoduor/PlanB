from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('DRIVER', 'Driver'),
        ('CAR_OWNER', 'Car Owner'),
        ('CORPORATE', 'Corporate'),
        ('CAR_HIRE', 'Car Hire Company'),
        ('ADMIN', 'Admin'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='DRIVER')
    has_paid_registration = models.BooleanField(default=False)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"

class DriverProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='driver_profile')
    id_number = models.CharField(max_length=50)
    profile_picture = models.ImageField(upload_to='profiles/drivers/', blank=True, null=True)
    driving_license = models.FileField(upload_to='documents/licenses/')
    good_conduct_cert = models.FileField(upload_to='documents/conduct_certs/')
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - Driver Profile"

class ClientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='client_profile')
    entity_name = models.CharField(max_length=255, blank=True, null=True, help_text="Company or Fleet Name if applicable")

    def __str__(self):
        return f"{self.user.username} - Client Profile"
