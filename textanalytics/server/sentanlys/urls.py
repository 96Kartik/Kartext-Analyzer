from django.conf.urls import  *
from sentanlys.views import *

urlpatterns = [
	url(r'^sentanlys',sentanlys,name ='sentanlys'),
	]