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
from rake_nltk import Rake

class DataBounding():
	def __init__(self,sentence,extracted_list):
		self.sentence 			= sentence
		self.keywordswithscores = extracted_list


@csrf_exempt
def conext(request):
	#import pdb;pdb.set_trace()
	extracted_list = list()
	csrfContext = RequestContext(request)
	if request.method == 'POST':

		try:
			json_data = json.loads(request.body)
			text = json_data.get('sentence')
			
		except:
			text = []
		if text:
			r = Rake()
			r.extract_keywords_from_text(text)
			extracted_list = r.get_ranked_phrases_with_scores()
			dataBounding = DataBounding(text,extracted_list)
			response_string = ''
			for item in extracted_list:
				value = '<i class="fa fa-dot-circle-o" aria-hidden="true"></i> '+'Keyword: '+str(item[1].encode('utf8'))+' | Score: '+str(item[0])+'<br>'
				response_string += value
			string_json = {}
			string_json['keywordswithscores'] = response_string
			

		else:
			pass
			#extracted_list.update({'Error':'Error occured at service response.'})
	return JsonResponse(string_json,safe=False)