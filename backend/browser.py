from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_options = Options()
chrome_options.add_argument("--headless")

browser = webdriver.Chrome(options=chrome_options)

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