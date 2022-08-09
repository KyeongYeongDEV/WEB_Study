import requests
res = requests.get("http://google.com")
print("응답코드 : ",res.status_code )#200이면 정상, 403이면 이 페이지에 접근할 수 없다
res.raise_for_status() # 오류 발생시 바로 종료

# if res.status_code == requests.codes.ok:
#     print("정상입니다.")
# else :
#     print("문제가 생겼습니다. ", res.status_code)

print(len(res.text))

with open("mygoogle.html","w",encoding="utf8") as f:
    f.write(res.text)