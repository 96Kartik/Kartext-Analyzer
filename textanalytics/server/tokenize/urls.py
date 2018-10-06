from django.conf.urls import  *
from tokenize.views import *

urlpatterns = [
	url(r'^tokenize',tokenize,name ='tokenize'),
	]