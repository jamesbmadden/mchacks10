import browser

# parse the inputted HTML for a course table from Minerva into valid info
def read_course_info(department, code):

  # load the html
  html = browser.get_course(department, code)

  # list of each section to return
  sections = []

  # split up the table into its lines
  lines = html.split('</tr>\n<tr>')

  # for each line, find out if its a section, and then get its info
  for row in lines:
    if "Lecture" in row:
      # ok cool this one is a lecture! grab the info
      cells = row.split('</td>\n<td class="dddefault">')
      
      # now get all the important stuff!
      crn = cells[1].split('</a>')[0].split('return true">')[1]
      section = cells[4]
      credits = cells[6]
      instructor = cells[13].replace("   ", " ").strip()
      location = cells[15]

      # and get the time too :)
      timerange = row.split('<td nowrap="nowrap" class="dddefault">')[1].split('</td>')[0]

      # now split into the first and second half - as numbers too
      start_time_txt = timerange.split("-")[0];

      start_time = float(start_time_txt.split(':')[0])

      if ":35" in start_time_txt:
        start_time = start_time + 0.5

      if "pm" in start_time_txt:
        start_time = start_time + 12

      # now split into the first and second half - as numbers too
      end_time_txt = timerange.split("-")[1];

      end_time = float(end_time_txt.split(':')[0])

      print(code, end_time_txt)

      if ":25" in end_time_txt:
        end_time = end_time + 0.5
      
      if ":55" in end_time_txt:
        end_time = end_time + 1

      if "pm" in end_time_txt and end_time < 12:
        end_time = end_time + 12

      # and finally, get the days of the week!
      days = row.split('</td>\n<td nowrap="nowrap" class="dddefault">')[0].split('</td>\n<td class="dddefault">')[8]

      # figure out which days it's on
      is_on_day = [False, False, False, False, False]

      if "M" in days:
        is_on_day[0] = True
      if "T" in days:
        is_on_day[1] = True
      if "W" in days:
        is_on_day[2] = True
      if "R" in days:
        is_on_day[3] = True
      if "F" in days:
        is_on_day[4] = True

      (rmp_score, difficulty) = browser.get_rmp_score(instructor.split(",")[0])

      sections.append({ "crn": crn, "score": rmp_score, "difficulty": difficulty, "department": department, "code": code, "section": section, "startTime": start_time, "endTime": end_time, "instructor": instructor, "location": location, "days": is_on_day })

  return sections