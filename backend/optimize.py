import itertools
import read
import browser

# takes in a list of courses, outputs the best combination of them
# checking_score = true means optimizing for score, false means optimizing for low difficulty
def optimize(courses, checking_score):

  # get every single combination of 
  combinations = list(itertools.product(*courses))


courses = [
  read.read_course_info('COMP', 208),
  read.read_course_info('CHEM', 120),
  read.read_course_info('PHYS', 142),
  read.read_course_info('MATH', 141),
]

optimize_score(courses)