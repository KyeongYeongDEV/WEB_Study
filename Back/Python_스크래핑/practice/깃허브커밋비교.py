import requests
from bs4 import BeautifulSoup

user1_url = "https://github.com/KyeongYeongDEV"
user1_res = requests.get(user1_url)
user1_res.raise_for_status()
user1_soup = BeautifulSoup(user1_res.text,"lxml")
user1_item = user1_soup.find("h2", attrs={"class":"f4 text-normal mb-2"}).get_text()
user1_commit = int(user1_item[7:10])

user2_url = "https://github.com/min-0"
user2_res = requests.get(user2_url)
user2_res.raise_for_status()
user2_soup = BeautifulSoup(user2_res.text,"lxml")
user2_item = user2_soup.find("h2", attrs={"class":"f4 text-normal mb-2"}).get_text()
user2_commit = int(user2_item[7:10])


print("user1의 커밋 : " + str(user1_commit))
print("user2의 커밋 : " + str(user2_commit))
print("더 많이 커밋한 사람은 >> " , end="")
if user1_commit > user2_commit:
    print("user1")
else:
    print("user2")
