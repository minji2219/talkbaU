import re
import json
from konlpy.tag import Mecab
from collections import Counter
from  openai_recommand import get_completion

def recommand_gift(file):
    # df = open("../%s"%(file), encoding = 'UTF-8')
    # front에게 받은 파일 열기

    df = file.read()
    df = df.decode('utf-8')
    df = df.split('\n')

    #선물 받는 대상 닉네임 추출하기
    user_name = df[0].split(' ')[0]

    #선물 받는 대상의  text만 data로 사용하기
    user_text = []
    for line in df:
        if '[%s]'%(user_name) in line: 
            user_text.append(line)
            
    #이모티콘, 사진, 미니 이모티콘 제거
    user_data = []
    for line in user_text:
        line = line.split('] ')
        if(line[2] == "이모티콘\r" or line[2].find("사진") > -1):
            continue;
        #(다리)등 이모티콘 제거
        if(line[2].find("(") > -1):
            line[2] = re.sub(r'\([^)]*\)','',line[2])
        user_data.append(line[2])
        
    #mecab을 이용한 명사 추출
    mecab = Mecab(dicpath=r"C:\mecab\mecab-ko-dic")
    noun = []
    for line in user_data:
        pos = mecab.pos(line)
        for keyword, type in pos:
            if type == "NNG":
                if(len(keyword)>1):
                    noun.append(keyword)
    #빈도수 세기(빈도수 높은 10개 단어 추출)
    counts = Counter(noun)
    tags = counts.most_common(10)
    #뽑은 단어 " "로 합치기
    extracted_words = ""
    for word, _ in tags:
        extracted_words += word + ", "
    print(extracted_words)
    prompt = """다음 작업을 수행하세요.
1 - %s 해당 단어들을 많이 쓰는 사람에게 알맞는 선물 5개 추천해주세요.
2 - 추천 이유 존댓말로 100자 알려주세요.
3 - 다음 형식을 사용해서 출력해주세요.
###example###
 1. 운동복: 운동이라는 단어를 많이 쓰는 것을 보니 운동을 즐기는 사람같습니다. 운동을 즐기는 사람에게는 멋진 운동복을 선물하세요.
 2. 선물이름: 선물추천이유
 3. 선물이름: 선물추천이유
 4. 선물이름: 선물추천이유
 5. 선물이름: 선물추천이유""" %(extracted_words)
      
    response = get_completion(prompt, [])
    res_array = string_to_array(str(response[-1]))
    
    res_array.append(user_name)
    res_array.append(response)
   
    return res_array

def string_to_array(str):

    new_json = str.replace("\'","\"")
    new_json = new_json.replace("\n"," ")
    new_json = json.loads(new_json,strict=False)
    new_json = new_json['content']
    
    # 항목 숫자와 점(.), 공백으로 시작하는 패턴을 기준으로 분리
    pattern = r'\d+\.\s'

    # 텍스트를 패턴으로 분리, 분리된 항목 앞에 숫자와 점을 붙여줌
    split_text = re.split(pattern, new_json)
    items = [f"{i}. {item.strip()}" for i, item in enumerate(split_text) if item]

    print(items)

    data_array=[]
    data_object = {}

    for line in items:
        first = line.split(". ")
        second = first[1].split(": ")

        data_object["number"] = first[0]
        data_object["gift"] = second[0]
        data_object["description"] = second[1]

        data_array.append(dict(data_object))
    
    return data_array
