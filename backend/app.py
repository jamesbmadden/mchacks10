# Import Flask
from flask import Flask, send_from_directory, send_file

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


if __name__ == '__main__':
   app.run()