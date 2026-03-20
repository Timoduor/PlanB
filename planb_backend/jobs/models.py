from django.db import models
from django.conf import settings
from fleet.models import Car

class JobPosting(models.Model):
    STATUS_CHOICES = (
        ('OPEN', 'Open'),
        ('ASSIGNED', 'Assigned'),
        ('COMPLETED', 'Completed'),
        ('CANCELLED', 'Cancelled'),
    )

    client = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='job_postings')
    car = models.ForeignKey(Car, on_delete=models.SET_NULL, null=True, blank=True, help_text="Car provided by client, if any")
    title = models.CharField(max_length=200)
    description = models.TextField()
    date_needed = models.DateTimeField()
    hours_needed = models.IntegerField(default=1)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='OPEN')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Job: {self.title} by {self.client.username}"

class JobApplication(models.Model):
    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('ACCEPTED', 'Accepted'),
        ('REJECTED', 'Rejected'),
    )

    job = models.ForeignKey(JobPosting, on_delete=models.CASCADE, related_name='applications')
    driver = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='applications')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.driver.username} applied for {self.job.title}"
