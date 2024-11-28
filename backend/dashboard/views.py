from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import viewsets  
from rest_framework.response import Response
from .models import Vendas, Transaction
from .serializers import VendasSerializer,TransactionSerializer
from .models import Employee
from .serializers import EmployeeSerializer

class VendasView(APIView):
    def get(self, request):
        data = Vendas.objects.all()
        serializer = VendasSerializer(data, many=True)
        return Response(serializer.data)
    
class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer



class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer