from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

chrome_options = Options()
chrome_options.add_argument("--headless")

browser = webdriver.Chrome(options=chrome_options)

# get the info about a prof on rate my professor
def get_rmp_score(professor):
  # open up the rmp homepage
  browser.get('https://www.ratemyprofessors.com/')

  # and enter McGill in to get started ONLY IF it's asking for the university
  if browser.find_elements(By.CSS_SELECTOR, 'input[placeholder="Your school"]'):

    # GET RID OF THE COOKIE WINDOW
    WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CLASS_NAME, 'CCPAModal__StyledCloseButton-sc-10x9kq-2')))
    browser.find_element(By.CLASS_NAME, 'CCPAModal__StyledCloseButton-sc-10x9kq-2').click()

    browser.find_element(By.CLASS_NAME, 'Search__DebouncedSearchInput-sc-10lefvq-1').send_keys('McGill')
    # wait for the clickable popup for McGill to appear
    WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CLASS_NAME, 'MenuItem__MenuItemHeader-h6a87s-0')))
    # now click it!
    browser.find_element(By.CLASS_NAME, 'MenuItem__MenuItemHeader-h6a87s-0').click()
    time.sleep(1)
  
  browser.find_element(By.CLASS_NAME, 'Search__DebouncedSearchInput-sc-10lefvq-1').send_keys(professor)
  # wait for the clickable popup for McGill to appear
  WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CLASS_NAME, 'MenuItem__MenuItemHeader-h6a87s-0')))
  # now click it!
  browser.find_element(By.CLASS_NAME, 'MenuItem__MenuItemHeader-h6a87s-0').click()
  
  # wait until the new page has loaded
  WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CLASS_NAME, 'RatingValue__Numerator-qw8sqy-2')))

  # now grab the scores and return them :)
  rating = float(browser.find_element(By.CLASS_NAME, 'RatingValue__Numerator-qw8sqy-2').get_property('innerText'))
  difficulty = float(browser.find_elements(By.CLASS_NAME, 'FeedbackItem__FeedbackNumber-uof32n-1')[1].get_property('innerText'))

  # now return both values!
  return (rating, difficulty)

# get info about a class
def get_course(department, code):
  # open up the minerva course explorer thing
  browser.get('https://horizon.mcgill.ca/pban1/bwckschd.p_disp_dyn_sched')
  # wait for the page to load
  WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CSS_SELECTOR, 'input[type="Submit"]')))

  # then in the future we can select term here, but for now, just skip that and choose whatever is currently set :)
  browser.find_element(By.CSS_SELECTOR, 'input[type="Submit"]').click()

  # wait for the page to load
  WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CSS_SELECTOR, 'input[value="Get Course Sections"]')))

  # now, on the new page, select the option for the department we're looking for
  browser.find_element(By.CSS_SELECTOR, 'option[value="{}"]'.format(department)).click()

  # click on the science faculty (for test :))
  browser.find_element(By.CSS_SELECTOR, 'option[value="SC"]').click()

  # finally, type in the course code, then we can submit the search!!!
  code_input = browser.find_element(By.ID, 'crse_id')  # Find the search box
  code_input.send_keys(str(code))

  # now submit the form!
  browser.find_element(By.CSS_SELECTOR, 'input[value="Get Course Sections"]').click()

  # wait for the page to load, and you've got your data :)
  WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CLASS_NAME, 'datadisplaytable')))

  return browser.find_element(By.CLASS_NAME, 'datadisplaytable').get_property('innerHTML')