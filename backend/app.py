# Import Flask
from flask import Flask, send_from_directory, send_file, make_response

import optimize
import read

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
  return read.read_course_info(department, code)

@app.route('/api/schedule/<departments>/<codes>/<max_score>')
def generate_schedule(departments, codes, max_score):

  # first, split the comma-seperated values from the URL into workable lists
  department_list = departments.split(',')
  code_list = codes.split(',')

  # now load all the courses
  courses = []
  for n in range(len(code_list)):
    courses.append(read.read_course_info(department_list[n], int(code_list[n])))

  return optimize.optimize(courses, max_score == "True")



if __name__ == '__main__':
   app.run()