import requests
from bs4 import BeautifulSoup as bs

url = requests.get("https://github.com/KyeongYeongDEV")
soup  = bs(url.content, "html.parser")

soup = soup.select("border py-2 graph-before-activity-overview")

print(soup)