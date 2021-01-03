from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver_path = "/Users/dharmasakthi/desktop/selenium/chromedriver"
brave_path = "/applications/Brave Browser.app/Contents/MacOS/Brave Browser"

option = webdriver.ChromeOptions()
# option.add_argument("disable-infobars");
option.binary_location = brave_path

browser = webdriver.Chrome(executable_path=driver_path, options=option)

browser.get("https://www.google.com/")

search_bar = browser.find_element_by_class_name("gLFyf")

# print(search_bar)

search_bar.clear() #Clear the search bar

search_bar.send_keys("youtube",Keys.ENTER)

# Check for assertion 

# try:
# 	assert "Google" in browser.title
# 	print("pass")
# except Exception as e:
# 	print("error",format(e))



