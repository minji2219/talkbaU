from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
    api_key = os.environ.get('OPEN_API_KEY')
)
#gpt에게 선물 물어보기
def get_completion(prompt, message_history=[]):
    if len(message_history) == 0:
        message_history.append(
            {
                "role":"system",
                "content":"You are a helpful assistant. You must answer in Korean. You always have to answer in the same format"
            }
        )
    message_history.append(
        {"role": "user", "content": prompt}
    )
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages = message_history,
    )
    message_history.append(
        {
            "role":"assistant",
            "content":response.choices[0].message.content
        }
    )
    return message_history