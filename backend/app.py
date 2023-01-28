# Import Flask
from flask import Flask, send_from_directory, send_file, make_response

import browser

# Initialize Flask app
app = Flask(__name__)

@app.route('/')
def index():
  print('Request for index page received')
  return send_file('../web/dist/index.html')

@app.route('/assets/<path:path>')
def assets(path):
  print('Request for', path, 'recieved')
  return send_from_directory('../web/dist/assets', path)

@app.route('/api/course/<department>/<int:code>')
def get_course(department, code):
  response = make_response(browser.get_course(department, code), 200)
  response.mimetype = "text/plain"
  return response



if __name__ == '__main__':
   app.run()