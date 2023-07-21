from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet,InfoListViewSet,Item01ViewSet,Item02ViewSet,Item03ViewSet,PlanguageViewSet,HistoryViewSet


router = DefaultRouter()
router.register('users',UserViewSet)
router.register('item01',Item01ViewSet)
router.register('item02',Item02ViewSet)
router.register('item03',Item03ViewSet)
router.register('language',PlanguageViewSet)
router.register('content',InfoListViewSet)
router.register('history',HistoryViewSet)

urlpatterns = [
    path('',include(router.urls)),
]