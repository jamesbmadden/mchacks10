import itertools
import read
import browser

# takes in a list of courses, outputs the best combination of them
# checking_score = true means optimizing for score, false means optimizing for low difficulty
def optimize(courses, checking_score):

  # get every single combination of 
  combinations = list(itertools.product(*courses))

  # run through every combination and make a score. Save the sections of each alongside it to know what the ideal is
  scores = []
  sections = []

  # keep track of the winner, so that we know without looping over again which the best is
  record = 0

  if not checking_score:
    record = 10000

  record_holder = -1

  for combo in combinations:

    print("trying a combination")

    # loop over all the pairs of sections in this combo. If they conflict, skip this whole combo 😭
    is_conflicting = False

    for pair in itertools.combinations(combo, 2):
      # get the times and days for each course
      (c1, c2) = pair
      c1_days = c1['days']
      c2_days = c2['days']

      c1_start_time = c1['startTime']
      c2_start_time = c2['startTime']
      c1_end_time = c1['endTime']
      c2_end_time = c2['endTime']

      # if any days overlap, see if the time overlaps. Otherwise continue
      if c1_days[0] != c2_days[0] and c1_days[1] != c2_days[1] and c1_days[2] != c2_days[2] and c1_days[3] != c2_days[3] and c1_days[4] != c2_days[4]:
        continue
      
      if (c1_start_time >= c2_start_time and c2_end_time > c1_start_time) or (c2_start_time >= c1_start_time and c1_end_time > c2_start_time) or (c1_start_time == c2_start_time):
        # there's a conflict :( this schedule is NOT viable
        print("We're conflicting! we are", c1['code'], c1['section'], c2['code'], c2['section'])
        is_conflicting = True
        break

    if is_conflicting:
      print("THERE WAS A CONFLICT!!!")
      continue

    # this schedule IS viable, so compute the average score!!
    score = 0
    # start off really high if we're testing difficulty, lowest score wins
    section_numbers = []
    # get the sum of each classes' points
    # also, get a list of all the section numbers to keep track of that along with the score
    for course in combo:
      if checking_score:
        score = score + course['score']
      else:
        score = score + course['difficulty']
      
      section_numbers.append(course['section'])

    # then divide it to get the average
    score = score / len(combo)

    # finally, add it to the overall list
    scores.append(score)
    sections.append(section_numbers)

    # see if we beat the record!
    if (checking_score and score > record) or (not checking_score and score < record):
      record = score
      record_holder = section_numbers

  # return the combinations and scores
  return { 'record': record, 'record_holder': record_holder, 'scores': scores, 'sections': sections, 'courses': courses }