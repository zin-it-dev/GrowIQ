from django.db.models.signals import post_save
from django.dispatch import receiver

from .sec_models import User, Role, Instructor

@receiver(post_save, sender=User)
def create_profile_for_user(sender, instance=None, created=False, **kwargs):
    if created:
        if instance.role == Role.INSTRUCTOR:
            Instructor.objects.create(user=instance)