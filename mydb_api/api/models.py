from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class BaseInfo(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Planguage(BaseInfo,models.Model):
    langName = models.CharField(max_length=50)
    def __str__(self):
        return f"{self.langName}"

class Item01(BaseInfo,models.Model):
    langName = models.ForeignKey(Planguage,on_delete=models.CASCADE)
    itemName01 = models.CharField(max_length=50)
    def __str__(self):
        return f"{self.itemName01}"

class Item02(BaseInfo,models.Model):
    itemName01 = models.ForeignKey(Item01,on_delete=models.CASCADE)
    itemName02 = models.CharField(max_length=50)
    def __str__(self):
        return f"{self.itemName02}"

class Item03(BaseInfo,models.Model):
    itemName02 = models.ForeignKey(Item02,on_delete=models.CASCADE)
    itemName03 = models.CharField(max_length=50)
    def __str__(self):
        return f"{self.itemName03}"

class InfoList(BaseInfo,models.Model):
    username = models.ForeignKey(User,on_delete=models.CASCADE)
    langName = models.ForeignKey(Planguage,on_delete=models.CASCADE)
    itemName01 = models.ForeignKey(Item01,on_delete=models.CASCADE)
    itemName02 = models.ForeignKey(Item02,on_delete=models.CASCADE,null=True)
    itemName03 = models.ForeignKey(Item03,on_delete=models.CASCADE,null=True)
    content = models.TextField(max_length=1500,null=True)
    def __str__(self):
        return f"{self.langName}-{self.itemName01}-{self.itemName02}-{self.itemName03}"

class History(BaseInfo,models.Model):
    username = models.ForeignKey(User,on_delete=models.CASCADE)
    infomation = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.username}:{self.infomation}"