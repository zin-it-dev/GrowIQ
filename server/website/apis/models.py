from django.db import models

from .mixins import Common, SlugMixin, AuditMixin
from .sec_models import User, Instructor, Student


class Category(Common, SlugMixin, AuditMixin):
    name = models.CharField(unique=True, max_length=80)
    
    class Meta:
        verbose_name_plural = "Categories"
    
    def __str__(self):
        return self.name
    
    
class Tag(Common, SlugMixin, AuditMixin):
    name = models.CharField(unique=True, max_length=80)
    
    def __str__(self):
        return f"#{self.name}"


class Base(Common, SlugMixin, AuditMixin):
    tags = models.ManyToManyField(
        Tag, 
        related_name="%(app_label)s_%(class)s_related",
        related_query_name="%(app_label)s_%(class)ss",
        blank=True
    )
    
    class Meta:
        abstract = True
        

class Course(Base):
    title = models.CharField(max_length=125)
    description = models.TextField()
    price = models.FloatField(default=0.00)
    
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title


