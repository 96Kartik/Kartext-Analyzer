#from __future__ import unicode_literals
from django.shortcuts import render_to_response
from django.template.context import RequestContext
from django.http import HttpResponse
#from django.core.context_processors import csrf
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core import serializers
import ast
import json
from config.settings import *
import nltk

class DataBounding():
	def __init__(self,sentence,token_list):
		self.sentence = sentence
		self.tokens = token_list


@csrf_exempt
def coref(request):
	#import pdb;pdb.set_trace()
	token_list = list()
	csrfContext = RequestContext(request)
	if request.method == 'POST':

		try:
			json_data = json.loads(request.body)
			text = json_data.get('sentence')
			
		except:
			text = []
		if text:
			token_list= nltk.word_coref(text)
			dataBounding = DataBounding(text,token_list)
			response_string = ''
			for item in token_list:
				value = '<i class="fa fa-dot-circle-o" aria-hidden="true"></i> '+str(item.encode('utf8'))+'<br>'
				response_string += value
			string_json ={}
			string_json['tokens'] = response_string
			

		else:
			pass
			#extracted_list.update({'Error':'Error occured at service response.'})
	return JsonResponse(string_json,safe=False)