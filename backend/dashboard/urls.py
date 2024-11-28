from django.urls import path, include
from .views import VendasView
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet, EmployeeViewSet

router = DefaultRouter()
router.register(r'transactions', TransactionViewSet)
router.register(r'employees', EmployeeViewSet)


urlpatterns = [
    path('vendas/', VendasView.as_view(), name='vendas'),
    path('', include(router.urls)),
]