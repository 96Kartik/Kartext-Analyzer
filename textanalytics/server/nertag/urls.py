from django.conf.urls import  *
from nertag.views import *

urlpatterns = [
	url(r'^nertag',nertag,name ='nertag'),
	]