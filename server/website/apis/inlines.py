from django.contrib import admin

from .models import Instructor

class InstructorInline(admin.StackedInline):
    model = Instructor
    can_delete = False
    verbose_name_plural = "instructor"
    fk_name = 'user'