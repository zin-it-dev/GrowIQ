from django.contrib import admin

from .models import User, Category, Course, Tag
from .sec import UserAdmin


admin.site.register(User, UserAdmin)
admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Tag)