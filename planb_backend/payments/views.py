from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Transaction
from .serializers import TransactionSerializer
import uuid

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.role == 'ADMIN':
            return Transaction.objects.all()
        return Transaction.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Initial creation is PENDING
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['post'], url_path='mpesa/initiate')
    def initiate_mpesa(self, request):
        # MOCK IMPLEMENTATION
        # In a real scenario, this would call the Daraja API STK Push
        amount = request.data.get('amount')
        transaction_type = request.data.get('transaction_type', 'REGISTRATION')
        
        transaction = Transaction.objects.create(
            user=request.user,
            amount=amount,
            transaction_type=transaction_type,
            status='PENDING'
        )
        return Response({
            "message": "STK Push initiated successfully (MOCKED).",
            "transaction_id": transaction.id
        }, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'], url_path='mpesa/callback')
    def mpesa_callback(self, request):
        # MOCK IMPLEMENTATION
        # In a real scenario, Daraja sends the callback here
        # We will manually pass transaction_id for mocking
        transaction_id = request.data.get('transaction_id')
        receipt = str(uuid.uuid4()).split('-')[0].upper()

        try:
            transaction = Transaction.objects.get(id=transaction_id)
            transaction.status = 'SUCCESS'
            transaction.mpesa_receipt_number = receipt
            transaction.save()

            if transaction.transaction_type == 'REGISTRATION':
                user = transaction.user
                user.has_paid_registration = True
                user.save()

            return Response({"message": "Callback processed.", "receipt": receipt})
        except Transaction.DoesNotExist:
            return Response({"error": "Transaction not found."}, status=status.HTTP_404_NOT_FOUND)
