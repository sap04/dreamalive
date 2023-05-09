from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse_lazy
from django.conf import settings
from django.contrib.auth.decorators import user_passes_test
from django.views.generic import TemplateView
from django.views import View

class HomePageView(TemplateView):
    template_name = 'home.html'

class AboutView(TemplateView):
    template_name = 'about.html'
class DonateScriptView(TemplateView):
    template_name = 'donate.html'

class DonateView(View):
    def get(self, request):
        # Redirect to the specified URL
        return redirect('https://payments-test.cashfree.com/forms/dacf')




