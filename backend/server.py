from flask import Flask,jsonify,request
from recommand import recommand_gift,string_to_array
from openai_recommand import get_completion

app = Flask(__name__)

# 선물 추천 받기
@app.route('/recommand', methods=['POST'])
def recommand():
    file = request.files['file']
    recommand = recommand_gift(file)
    return jsonify(recommand)

# 선물 다시 추천 받기
@app.route('/recommand/again', methods=['POST'])
def recommand_again():
    nickname = request.get_json()['nickname']
    message_history = request.get_json()['message']
    recommand_again = get_completion("다시 추천해줘.", message_history)

    res_array = string_to_array(str(recommand_again[-1]))
    res_array.append(nickname)
    res_array.append(recommand_again)

    return jsonify(res_array)
    
if __name__ == '__main__':
    app.run(debug=True)
