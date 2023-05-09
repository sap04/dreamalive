from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomePageView.as_view(), name='home'),
    path('about', views.AboutView.as_view(), name='about'),
    path('donategate', views.DonateView.as_view(), name='donategate'),
    path('donatescript', views.DonateScriptView.as_view(), name='donatescript'),

]
