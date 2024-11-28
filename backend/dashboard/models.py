from django.db import models

class Vendas(models.Model):
    date = models.DateField()
    vendas = models.FloatField()
    produtos = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.produtos} - {self.vendas}"
    
class Transaction(models.Model):
    CATEGORY_CHOICES = [
        ('receita', 'Receita'),
        ('despesa', 'Despesa'),
    ]

    title = models.CharField(max_length=100)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()

    def __str__(self):
        return self.title
    
class Employee(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()  
    cpf = models.CharField(max_length=14, unique=True)
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name