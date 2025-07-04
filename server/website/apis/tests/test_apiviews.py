import pytest
from django.urls import reverse
from rest_framework import status

from .factories import CategoryFactory

pytestmark = pytest.mark.django_db


class TestCategoryView:
    url = reverse("apis:category-list")
    
    def test_list_categories(self, client):
        CategoryFactory.create_batch(5)
        response = client.get(self.url)
        assert response.status_code == status.HTTP_200_OK
        assert len(response.json()) == 5