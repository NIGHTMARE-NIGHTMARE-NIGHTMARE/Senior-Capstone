from django.shortcuts import render
import requests
import json
from django.http import JsonResponse

TEMPLATES_DIRS = (
    'os.path.join(BASE_DIR, "templates"),'
)
def home(request):
    host_url = f'http://{request.get_host()}'
    csrf_token = get_csrf_token(request)

    context = {
    'csrf_token': csrf_token,
    'host': host_url,
    }
    return render(request, "home.html", context)

# Function to get CSRF token from the request
def get_csrf_token(request):
    return request.COOKIES.get('csrftoken', '')

def api_call(request):
    debug = False
    if not debug:
        body = json.loads(request.body)
        message = body.get('message')
        print("Received message:", message)

        # Define the URL
        url = 'http://172.20.10.4:5005/webhooks/rest/webhook'

        # Create the headers with Content-Type and X-CSRFToken
        headers = {
            'Content-Type': 'application/json',
            'X-CSRFToken': get_csrf_token(request),
        }

        # Create the data payload
        data = {
            "message": message,
            "sender": "User"
        }

        # Convert the payload to JSON
        json_data = json.dumps(data)

        # Make the POST request
        response = requests.post(url, headers=headers, data=json_data)

        responseCopy = {}

        if len(response.json()) > 1:
            responseCopy['image'] = response.json()[1]['image']

        text = response.json()[0]['text']

        if '\n' in text:
            text = text.replace('\n', '<br>')
        if '\t' in text:
            text = text.replace('\t', '&emsp;&emsp;')
        if '^' in text:
            text = text.split('^')

        responseCopy['text'] = text

        print('\n\n', responseCopy)

        return JsonResponse(responseCopy, safe=False)
    else:
        return JsonResponse([
            "Please stop texting me!","I don't know who you are."
        ], safe=False)