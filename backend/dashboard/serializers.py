from rest_framework import serializers
from .models import Vendas,Transaction
from .models import Employee

class VendasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendas
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

