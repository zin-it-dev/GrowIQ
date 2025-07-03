from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField

from .models import User, Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['slug', 'username', 'email', 'is_active']
        
    
class CategorySerializer(serializers.ModelSerializer):
    children = RecursiveField(many = True, read_only = True)
    
    class Meta:
        model = Category
        fields = ['slug', 'name', 'is_active', 'children']
        
        
