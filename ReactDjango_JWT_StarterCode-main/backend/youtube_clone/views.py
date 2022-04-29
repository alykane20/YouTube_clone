from xml.etree.ElementTree import Comment
from django.shortcuts import render

# Create your views here.


def get_comments(request):
    comment = Comment.objects.all()
    # serializer = CommentSerializer(cars, many=True)
    return Response('ok')