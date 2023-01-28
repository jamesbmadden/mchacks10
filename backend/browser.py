from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--headless")

browser = webdriver.Chrome(options=chrome_options)

def get_page_html(url): 
  browser.get(url)
  return browser.page_source.encode("utf-8")