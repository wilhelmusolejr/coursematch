from django.urls import path
from .views import PredictView, CourseImageView

urlpatterns = [
    path("predict/", PredictView.as_view(), name="predict"),
    path("courses/", CourseImageView.as_view(), name="courses")
]
