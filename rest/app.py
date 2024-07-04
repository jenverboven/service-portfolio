# import dependencies for creating the REST app
# Flask is the framework for making a REST API
# make_response is for constructing HTTP responses
# jsonify is for construction JSON objects
from flask import Flask, request, jsonify, make_response

# import flask_cors to be able to configure CORS headers to be able to query endpoint from the front end
from flask_cors import CORS

# import environ to be able to work with environment variables
from os import environ

# create instance of Flask class which is the application
# __name__ is a shortcut for the name of the app's module or package
app = Flask(__name__)

# enable cors
CORS(app)

# A simple test route for testing wether the API is reachable or not
@app.route("/test", methods=["GET"])
def test():
    return make_response(jsonify({"message": "The Flask API is reachable!"}), 200)

@app.route("/data", methods=["GET"])
def data():
    return make_response(jsonify({"data": 20}), 200)

@app.route("/add/<argument_1>/<argument_2>", methods=["GET"])
def add(argument_1, argument_2):
    try:
        response = int(argument_1) + int(argument_2)
        return make_response(jsonify({"data": response}), 200)
    except:
        return make_response(jsonify({"error": "Error calculating result. Was a parameter not an integer?"}), 200)