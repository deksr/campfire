print("Hello, World!")

from flask import Flask, render_template, request, jsonify
from eventregistry import *

import requests
import time



app = Flask(__name__)

@app.route("/")
def index():
  print ("Hello World!")
  er = EventRegistry("http://eventregistry.org", verboseOutput = True)
  q = QueryEvents()
  q.addConcept(er.getConceptUri("Deer"))
  q.addNewsSource(er.getNewsSourceUri(["bbc", "cnn"]))
  q.addRequestedResult(RequestEventsInfo(page = 1, count = 1, sortBy = "size", sortByAsc = False)) 
  print er.execQuery(q)
  list = er.execQuery(q)
  return jsonify(results=list)



# below code works but the output is in the console
# er = EventRegistry("http://eventregistry.org", verboseOutput = True)
# q = QueryEvents()
# # get events related to Barack Obama
# q.addConcept(er.getConceptUri("Star Wars"))
# # that have been reported also by BBC
# q.addNewsSource(er.getNewsSourceUri(["bbc", "cnn"]))
# # return event details for largest 30 events
# q.addRequestedResult(RequestEventsInfo(page = 1, count = 3, sortBy = "size", sortByAsc = False))   
# # return top 5 locations and organizations mentioned the most in these events
# # q.addRequestedResult(RequestEventsConceptAggr(conceptCount = 5, 
# #     returnInfo = ReturnInfo(conceptInfo = ConceptInfoFlags(type = ["org", "loc"]))))        
# # execute the query
# print er.execQuery(q)

# response = er.execQuery(q)
# json_object=response.text
# return json_object




# below code works
# er = EventRegistry("http://eventregistry.org", verboseOutput = True)
# q = QueryEvents()
# q.addConcept(er.getConceptUri("Star Wars"))   
# q.addRequestedResult(RequestEventsInfo(sortBy = "date", count=10))   # return event details for last 10 events
# print er.execQuery(q)




  # below commented out code is working. this is using the request module
  # response = requests.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=60941c39a76e4f14902097a5030f4cab")
  # # jsonify(result)
  # json_object=response.text
  # return json_object

if __name__ == "__main__":
 app.run()

# def main():
# 	response = requests.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=60941c39a76e4f14902097a5030f4cab")
# 	weather =_response.json()
# 	pprint(weather)



