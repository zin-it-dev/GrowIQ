from django.db import models
from django.core.exceptions import ObjectDoesNotExist

from .models import Category, User


class BaseRepository:
    def __init__(self, model: models.Model):
        self.model = model

    def get_all(self):
        return self.model.objects.filter(is_active=True).order_by('created_on').all()

    def get_by_id(self, obj_id):
        try:
            return self.model.objects.get(id=obj_id)
        except ObjectDoesNotExist:
            return None

    def create(self, **kwargs):
        return self.model.objects.create(**kwargs)

    def update(self, obj_id, **kwargs):
        obj = self.get_by_id(obj_id)
        if obj:
            for key, value in kwargs.items():
                setattr(obj, key, value)
            obj.save()
            return obj
        return None

    def delete(self, obj_id):
        obj = self.get_by_id(obj_id)
        if obj:
            obj.delete()
            return True
        return False
    
    
class CategoryRepository(BaseRepository):
    def __init__(self):
        super().__init__(Category)

    def get_all(self):
        return self.model.objects.root_nodes().filter(is_active=True).prefetch_related('children').order_by('created_on')


class UserRepository(BaseRepository):
    def __init__(self):
        super().__init__(User)

    def get_all(self):
        return self.model.objects.filter(is_active=True).order_by("date_joined").all()