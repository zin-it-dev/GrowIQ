from django.db.models.signals import post_save
from django.dispatch import receiver

from .sec_models import User, Role, Instructor, Student

@receiver(post_save, sender=User)
def create_profile_for_user(sender, instance=None, created=False, **kwargs):
    if created:
        if instance.role == Role.INSTRUCTOR:
            Instructor.objects.create(user=instance)
        elif instance.role == Role.STUDENT:
            Student.objects.create(user=instance)
        elif instance.role == Role.ADMIN:
            instance.is_superuser = True
            instance.is_staff = True
            instance.save(update_fields=["is_superuser", "is_staff"])