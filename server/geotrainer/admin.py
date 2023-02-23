from django.contrib import admin

# import the model Todo
from .models import Games
 
# create a class for the admin-model integration
class GeotrainerAdmin(admin.ModelAdmin):
 
    # add the fields of the model here
    list_display = ("total","flags",'capitals')
 
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Games, GeotrainerAdmin)
