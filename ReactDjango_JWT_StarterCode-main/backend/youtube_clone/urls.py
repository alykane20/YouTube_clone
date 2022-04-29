from django.urls import path, include
from youtube_clone import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    # path('', views.user_comments),
    path('', views.get_comments),
]
