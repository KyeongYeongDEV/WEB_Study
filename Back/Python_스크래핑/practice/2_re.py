import re

p = re.compile("ca.e") 
# . : 하나의 문자를 의미
# ^ (^de) : 문자열의 시작 > desk,destination
# $ (se$) : 문자열의 끝 > case

def print_match(m): 
    if m:
        print("m.group(): ",m.group())#일치하는 문자열 반환  #메치되지 않으면 에러 발생
        print("m.string:",m.string) # 입력 받은 문자열
        print("m.start()", m.start())#일치하는 문자열의 시작 index
        print("m.end()", m.end()) # 일치하는 문자열의 끝 index
        print("m.span()", m.span())#일치하는 문자열의 시작 / 끝 index
    else: 
        print("매칭되지 않음") 

# m = p.match("care")#match : 주어진 문자열의 처음부터 일치하는지 확인
# print_match(m)

# m = p.search("good care")#sreach : 주어진 문자열 중에 일치하는 게 있는지 확인
# print_match(m)

lst = p.findall("careless")#findall : 일치하는 모든 것을 리스트 형태로 반환
print(lst)

#1. re.compile("원하는 형태")
#2. m = p.match("비교할 문자열"): 주어진 문자열의 처음부터 일치하는지 확인
#3. m = p.srearch("비고할 문자열") : 주어진 문자열 중에 일치하는 게 있는지 확인
#4. lst = p.findall("비교할 문자열") : 일치하는 모든 것을 "리스트" 형태로 변환

#원하는 형태 : 정규식
# . (ca.e): 하나의 문자를 의미
# ^ (^de) : 문자열의 시작 > desk,destination
# $ (se$) : 문자열의 끝 > case
