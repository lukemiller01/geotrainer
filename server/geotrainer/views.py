from django.shortcuts import render

# import view sets from the REST framework
from rest_framework import viewsets
 
from .serializers import GamesSerializer
 
from .models import Games
 
class GameView(viewsets.ModelViewSet):
 
    # create a serializer class and assign it to the QuizSetSerializer
    serializer_class = GamesSerializer
 
    queryset = Games.objects.all()