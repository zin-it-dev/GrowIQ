import factory

from faker import Faker

from ..models import Category

fake = Faker(['it_IT', 'en_US', 'ja_JP'])

class CategoryFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Category

    name = factory.Sequence(lambda n: f"Category {n}")
    slug = factory.Sequence(lambda n: f"category-{n}")