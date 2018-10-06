#from __future__ import unicode_literals
from django.shortcuts import render_to_response
from django.template.context import RequestContext
from django.http import HttpResponse
#from django.core.sentanlys_processors import csrf
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core import serializers
import nltk
#nltk.download_shell()
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.tokenize import sent_tokenize
import ast
import json
from config.settings import *
from rake_nltk import Rake
import pdb
class DataBounding():
	def __init__(self,sentence,extracted_list):
		self.sentence 			= sentence
		self.keywordswithscores = extracted_list


@csrf_exempt
def sentanlys(request):
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
			pdb.set_trace()
			analyser = SentimentIntensityAnalyzer()
			messages =sent_tokenize(text)
			summary = {"positive":0,"neutral":0,"negative":0}
		for x in messages: 
    			ss = sid.polarity_scores(x)
    			if ss["compound"] == 0.0: 
        			summary["neutral"] +=1
    			elif ss["compound"] > 0.0:
        			summary["positive"] +=1
    			else:
        			summary["negative"] +=1
		
			dataBounding = DataBounding(text,summary)
			response_string = ''
			for item in extracted_list:
				value = '<i class="fa fa-dot-circle-o" aria-hidden="true"></i> '+str(item[1].encode('utf8'))+' : '+str(item[0])+'<br>'
				response_string += value
			string_json = {}
			string_json['keywordswithscores'] = response_string
			

		else:
			pass
			#extracted_list.update({'Error':'Error occured at service response.'})
	return JsonResponse(string_json,safe=False)

	