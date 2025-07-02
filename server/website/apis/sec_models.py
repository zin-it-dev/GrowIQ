from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser

from .mixins import SlugMixin, AuditMixin
from .utils import gravatar_url


class Role(models.TextChoices):
    ADMIN = 'admin', 'Administrator'
    INSTRUCTOR = 'instructor', 'Instructor'
    STUDENT = 'student', 'Student'


class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not username or len(username) <= 0 : 
            raise ValueError("Users must have an username")
        
        if not email or len(email) <= 0 : 
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            username=username
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    
    def create_superuser(self, username, email, password=None):
        user = self.create_user(
            email=email,
            username=username,
            password=password,
        )
        user.role = Role.ADMIN
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractUser, SlugMixin):
    role = models.CharField(
        max_length=10,
        choices=Role.choices,
        default=Role.STUDENT
    )
    email = models.EmailField(unique=True, max_length=125, null=True)
    avatar = models.ImageField(upload_to='avatars/', default=gravatar_url())
    date_of_birth = models.DateField(blank=True, null=True)
    bio = models.TextField(blank=True)
    
    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def __str__(self):
        return self.get_full_name() or self.username


class Student(AuditMixin):
    user = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': Role.STUDENT})

    def __str__(self):
        return self.user.get_full_name()
    

class Instructor(AuditMixin):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        limit_choices_to={'role': Role.INSTRUCTOR}
    )
    
    def __str__(self):
        return self.user.get_full_name()