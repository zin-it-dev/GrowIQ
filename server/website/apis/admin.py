from django.contrib import admin
from mptt.admin import MPTTModelAdmin

from .models import User, Category, Course, Tag
from .sec import UserAdmin


admin.site.register(User, UserAdmin)
admin.site.register(Category, MPTTModelAdmin)
admin.site.register(Course)
admin.site.register(Tag)