from rest_framework import serializers

from .models import User, Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['slug', 'username', 'email', 'is_active']
        
    
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['slug', 'name', 'is_active']
        
        
