from django.db import models
 
class Games(models.Model):
    total=models.IntegerField()
    flags=models.IntegerField()
    capitals=models.IntegerField()

 
    # string representation of the class
    def __str__(self):
 
        #it will return the title
        return self.total
