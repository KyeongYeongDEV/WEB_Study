import requests
from bs4 import BeautifulSoup

indeed_resul= requests.get("https://www.indeed.com/jobs?q=python&limit=50&vjk=db6e9d32ffd8a8ec")

indeed_soup = BeautifulSoup(indeed_resul.text, "html.parser")#여기까지 잘 됨

pagination = indeed_soup.find("div", {"class" : "pagination"})

pages = pagination.find_all('a')

spans =[]

for page in pages :
  spans.append(page.find("span"))
print(spans[:-1])