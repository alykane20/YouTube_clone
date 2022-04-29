from xml.etree.ElementTree import Comment
from django.shortcuts import render
from .serializer import CommentSerializer
from .serializer import ReplySerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

# Create your views here.


def get_comments(request):
    comment = Comment.objects.all()
    serializer = CommentSerializer(comment, many=True)
    return Response(serializer.data)