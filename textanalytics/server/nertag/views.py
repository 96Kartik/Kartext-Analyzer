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
	def __init__(self,sentence,nertag_list):
		self.sentence = sentence
		self.nertags = nertag_list


@csrf_exempt
def nertag(request):
	#import pdb;pdb.set_trace()
	nertag_list = list()
	csrfContext = RequestContext(request)
	if request.method == 'POST':

		try:
			json_data = json.loads(request.body)
			text = json_data.get('sentence')
			
		except:
			text = []
		if text:
			nertag_list= str(nltk.chunk.ne_chunk(nltk.pos_tag(nltk.word_tokenize(text))))
			dataBounding = DataBounding(text,nertag_list)
			response_string = ''
			
			value = '<i class="fa fa-dot-circle-o" aria-hidden="true"></i> '+nertag_list
			
			string_json ={}
			string_json['nertags'] = value
			

		else:
			pass
			#extracted_list.update({'Error':'Error occured at service response.'})
	return JsonResponse(string_json,safe=False)