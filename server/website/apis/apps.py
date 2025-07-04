from django.apps import AppConfig


class ApisConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apis'
    verbose_name = "GrowIQ 🎓"

    def ready(self):
        import apis.signals