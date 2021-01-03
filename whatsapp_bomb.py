from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

driver_path = "/Users/dharmasakthi/desktop/geek/selenium/chromedriver"
# https://stackoverflow.com/questions/47158434/how-to-run-selenium-tests-on-the-brave-web-browser/59452881#59452881?newreg=a17c18017d17403a9afc8c377f72bb79
brave_path = "/applications/Brave Browser.app/Contents/MacOS/Brave Browser"

option = webdriver.ChromeOptions()
option.binary_location = brave_path
# option.add_argument("--incognito") OPTIONAL
# option.add_argument("--headless") OPTIONAL

# Create new Instance of Chrome
browser = webdriver.Chrome(executable_path=driver_path, options=option)

browser.get("https://web.whatsapp.com/")

load_sidebar = WebDriverWait(browser, 20).until(EC.presence_of_element_located((By.ID, "side")))



side_search_box = browser.find_element_by_xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/label[1]/div[1]/div[2]")

browser.minimize_window()

# print(side_search_box)

side_search_box.click()

attack = input("Chat name : ")

side_search_box.send_keys(attack,Keys.ENTER)

option = input("CHOOSE 1 FOR TEXT BOMB; CHOOSE 2 FOR STICKER BOMB : ")

if(option == '1'):
    msg_count = int(input("COUNT : "))
    msg = input("MESSAGE: ")
    sent = 1
    while(msg_count>0):
        message_box = browser.find_element_by_xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[1]/div[2]/div[1]/div[2]")
        message_box.click()
        message_box.send_keys(msg,Keys.ENTER)
        print("SENT : " + str(sent) + " MSG")
        sent = sent + 1
        msg_count = msg_count - 1
elif (option == '2'):
    msg_count = int(input("COUNT : "))
    sent = 1

    # message_box = browser.find_element_by_xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[1]/div[2]/div[1]/div[2]")
    # message_box.click()

    emoji_section = browser.find_element_by_xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[1]/div[1]/div[1]/button[2]")
    # /html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[1]/div[1]/div[1]/button[2]
    emoji_section.click()

    # onload_sticker = WebDriverWait(browser, 20).until(EC.presence_of_element_located((By.XPATH,"/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[1]/div[1]/div[1]/button[4]")))
    sticker_section = WebDriverWait(browser, 20).until(EC.presence_of_element_located((By.XPATH,"/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[1]/div[1]/div[1]/button[4]")))
    sticker_section = browser.find_element_by_xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[1]/div[1]/div[1]/button[4]")
    browser.execute_script("arguments[0].click();", sticker_section)
    # /span[1]/*[1]
    # print(sticker_section)
    # sticker_section.click()

    onload_sticker = WebDriverWait(browser, 20).until(EC.presence_of_element_located((By.XPATH, "/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/img[1]")))

    while(msg_count > 0):
        stickers = browser.find_element_by_xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/img[1]")
        stickers.click()
        print("SENT : " + str(sent) + " MSG")
        sent = sent + 1
        msg_count = msg_count - 1

# browser.quit();

# /html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]
# /html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/img[1]

# i = 10
# j = 1
# while i>0:
	# stickers.click()
# 	print(('Sent : '+ str(j)),end='\n')
# 	j = j + 1
# 	i = i - 1

# sticker_section = browser.find_element_by_xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[1]/footer[1]/div[1]/div[1]/div[1]/button[4]")
# sticker_section.click()
# print(message_box)


# browser.quit();




