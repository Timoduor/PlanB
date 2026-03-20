from rest_framework import viewsets, permissions
from .models import Car
from .serializers import CarSerializer

class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        # Admins can see all cars
        if user.role == 'ADMIN':
            return Car.objects.all()
        # Ordinary drivers or public APIs might see only 'AVAILABLE' cars, but owners can see their own
        if user.role in ['CAR_OWNER', 'CORPORATE', 'CAR_HIRE']:
            return Car.objects.filter(owner=user)
        # Assuming drivers just want to see available cars to apply to
        return Car.objects.filter(status='AVAILABLE')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
