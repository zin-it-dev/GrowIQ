from rest_framework import viewsets

from .repositories import UserRepository, CategoryRepository
from .serializers import UserSerializer, CategorySerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserRepository().get_all()
    serializer_class = UserSerializer
    
    
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = CategoryRepository().get_all()
    serializer_class = CategorySerializer