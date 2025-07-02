from django.contrib import admin
from django.urls import path, include
from debug_toolbar.toolbar import debug_toolbar_urls
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('apis.urls'))
]

if settings.DEBUG:
    urlpatterns += debug_toolbar_urls()