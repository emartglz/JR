# import the Flask class from the flask module
from flask import Flask, render_template, request
import requests

# create the application object
app = Flask(__name__)

@app.route('/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

# use decorators to link the function to a url
@app.route('/')
def home():
    return render_template('index.html')  # return a string
    # return app.send_static_file('static/index.html')

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')  # render a template

@app.route('/static/get_url')
def get_content_url():
    url = request.args.get('my_var', None)
    return requests.get(url).content

# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)