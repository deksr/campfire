print("Hello, World!")

from flask import Flask, render_template, request


import requests


app = Flask(__name__)

@app.route("/")
def index():
  print ("Hello World!")


  # below commented out code is working. this is using the request module
  response = requests.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=60941c39a76e4f14902097a5030f4cab")
  # jsonify(result)
  json_object=response.text
  return json_object

if __name__ == "__main__":
 app.run()

# def main():
# 	response = requests.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=60941c39a76e4f14902097a5030f4cab")
# 	weather =_response.json()
# 	pprint(weather)



