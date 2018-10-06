from django.conf.urls import  *
from conext.views import *

urlpatterns = [
	url(r'^conext',conext,name ='conext'),
	]