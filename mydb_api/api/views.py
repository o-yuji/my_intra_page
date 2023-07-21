from django.shortcuts import render
from rest_framework import viewsets,generics
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from . import models
from . import serializers

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (AllowAny,)

class ManageUserView(generics.RetrieveAPIView):
    serializer_class = serializers.UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user

class PlanguageViewSet(viewsets.ModelViewSet):
    queryset = models.Planguage.objects.all()
    serializer_class = serializers.LangageSerializer
    permissioin_classes = (AllowAny,)

class Item01ViewSet(viewsets.ModelViewSet):
    queryset = models.Item01.objects.all()
    serializer_class = serializers.Item01Serializer
    permissioin_classes = (AllowAny,)

class Item02ViewSet(viewsets.ModelViewSet):
    queryset = models.Item02.objects.all()
    serializer_class = serializers.Item02Serializer
    permissioin_classes = (AllowAny,)

class Item03ViewSet(viewsets.ModelViewSet):
    queryset = models.Item03.objects.all()
    serializer_class = serializers.Item03Serializer
    permissioin_classes = (AllowAny,)

class InfoListViewSet(viewsets.ModelViewSet):
    queryset = models.InfoList.objects.all()
    serializer_class = serializers.InfoListSerializer
    permissioin_classes = (AllowAny,)

class HistoryViewSet(viewsets.ModelViewSet):
    queryset = models.History.objects.all()
    serializer_class = serializers.HistorySerializer
    permission_classes = (AllowAny,)