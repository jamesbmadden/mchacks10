# Import Flask
from flask import Flask, send_from_directory

# Initialize Flask app
app = Flask(__name__)

@app.route('/<path:path>')
def index(path):
    print('Request for index page received')
    return send_from_directory('../web/dist', path)


if __name__ == '__main__':
   app.run()