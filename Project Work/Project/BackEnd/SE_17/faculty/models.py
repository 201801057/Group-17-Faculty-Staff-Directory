from django.db import models
from django.contrib.auth.models import User
import os 
from django.utils.deconstruct import deconstructible

# Create your models here.

@deconstructible
class PathAndRename(object):

    def __init__(self, sub_path):
        self.path = sub_path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        filename = '{}.{}'.format(instance.user.id, ext)
        return os.path.join(self.path, filename)

path_and_rename = PathAndRename("faculty/static/faculty/images")

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=100,default=None)
    email = models.EmailField(max_length=100,default=None)
    department = models.CharField(max_length=100,default=None)
    inst_name = models.CharField(max_length=100,default=None)
    courses = models.TextField(max_length=100,default=None)
    education = models.TextField(max_length=100,default=None)
    pro_int = models.TextField(max_length=100,default=None)
    area_exp = models.TextField(max_length=100, default=None)
    image = models.ImageField(upload_to=path_and_rename)

    


