# generates a timetable from course data (and user preferences)

# get data from each course
import read, browser

# test values
dept = "MATH"
course = 141

# get course data
html = browser.get_course(dept, course)

# store course data
course_info = read.read_course_info(html, dept, course)

# values we want
depts = []
codes = []
sections = []
start_times = []
end_times = []
instructors = []
locations = []
days = []

# get info
for i in course_info:
    depts.append(i['department'])
    codes.append(i['code'])
    sections.append(i['section'])
    start_times.append(i['startTime'])
    end_times.append(i['endTime'])
    instructors.append(i['instructor'])
    locations.append(i['location'])
    days.append(i['days'])

# for testing purposes
print(depts, codes, sections, start_times, end_times, instructors, locations, days)

# *want to organize by course or by property?

# analyze

# give each thing a score?
# add up scores at end?

# check which instructors
for i in instructors:
    if 'Sidney' in i and 'Trudeau' in i:
        print("yes")
    else:
        print('no')
