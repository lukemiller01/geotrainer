# import serializers from the REST framework
from rest_framework import serializers
 
# import the todo data model
from .models import Games
 
# create a serializer class
class GamesSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Games
        fields = ('total','flags','capitals')