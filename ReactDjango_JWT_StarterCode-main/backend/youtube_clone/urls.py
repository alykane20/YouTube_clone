from django.urls import path, include
from youtube_clone import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('<int:video_id>/', views.user_comments),
    path('update/<int:pk>/', views.update_comment),
    path('', views.get_comments),
]
