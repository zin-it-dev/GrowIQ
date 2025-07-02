from django.db import models
from django.conf import settings


class SlugMixin(models.Model):
    slug = models.SlugField(default="", null=False)

    class Meta:
        abstract = True
        

class AuditMixin(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    changed_on = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='%(class)s_created',
    )
    changed_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='%(class)s_updated',
    )
    
    class Meta:
        abstract = True


class Common(models.Model):
    is_active = models.BooleanField(default=True, verbose_name="Active")
    
    class Meta:
        abstract = True