from django.conf.urls import  *
from postag.views import *

urlpatterns = [
	url(r'^postag',postag,name ='postag'),
	]