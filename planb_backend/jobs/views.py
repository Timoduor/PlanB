from rest_framework import viewsets, permissions
from .models import JobPosting, JobApplication
from .serializers import JobPostingSerializer, JobApplicationSerializer

class JobPostingViewSet(viewsets.ModelViewSet):
    queryset = JobPosting.objects.all()
    serializer_class = JobPostingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.role == 'ADMIN':
            return JobPosting.objects.all()
        # Drivers see open jobs. Clients see their own jobs.
        if user.role == 'DRIVER':
            return JobPosting.objects.filter(status='OPEN')
        return JobPosting.objects.filter(client=user)

    def perform_create(self, serializer):
        serializer.save(client=self.request.user)

class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.role == 'ADMIN':
            return JobApplication.objects.all()
        if user.role == 'DRIVER':
            return JobApplication.objects.filter(driver=user)
        # Client sees applications for their own jobs
        return JobApplication.objects.filter(job__client=user)

    def perform_create(self, serializer):
        serializer.save(driver=self.request.user)
