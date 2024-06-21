# import dependencies for creating the REST app
# Flask is the framework for making a REST API
# make_response is for constructing HTTP responses
# jsonify is for construction JSON objects
from flask import Flask, request, jsonify, make_response

# import environ to be able to work with environment variables
from os import environ

# create instance of Flask class which is the application
# __name__ is a shortcut for the name of the app's module or package
app = Flask(__name__)

# A simple test route for testing wether the API is reachable or not
@app.route("/test", methods=["GET"])
def test():
    return make_response(jsonify({"message": "The flask API is reachable!"}), 200)
