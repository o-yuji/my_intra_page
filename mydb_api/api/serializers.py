from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
      model = User
      fields = ['id','username','password']
      extra_kwargs = {'password':{'write_only':True,'required':True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class LangageSerializer(serializers.ModelSerializer):
    class Meta:
      model = models.Planguage
      fields = ['id','langName','created_at','updated_at']

class Item01Serializer(serializers.ModelSerializer):
    class Meta:
      model = models.Item01
      fields = ['id','langName','itemName01','created_at','updated_at']

class Item02Serializer(serializers.ModelSerializer):
    class Meta:
      model = models.Item02
      fields = ['id','langName','itemName02','created_at','updated_at']

class Item03Serializer(serializers.ModelSerializer):
    class Meta:
      model = models.Item03
      fields = ['id','langName','itemName03','created_at','updated_at']

class InfoListSerializer(serializers.ModelSerializer):
    class Meta:
      model = models.InfoList
      fields = ['id','langName','itemName01','itemName02','itemName03','content','created_at','updated_at']

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
      model = models.History
      fields = ["id","username","infomation",'created_at','updated_at']