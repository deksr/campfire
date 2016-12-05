print("Hello, World!")

from flask import Flask, render_template, request
from eventregistry import *

import requests
import time



app = Flask(__name__)

@app.route("/")
def index():
  print ("Hello World!")


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



