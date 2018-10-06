from django.conf.urls import  *
from coref.views import *

urlpatterns = [
	url(r'^coref',coref,name ='coref'),
	]