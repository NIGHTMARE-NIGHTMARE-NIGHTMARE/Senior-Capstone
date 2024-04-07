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
    debug = True
    if not debug:
        body = json.loads(request.body)
        message = body.get('message')
        print("Received message:", message)

        # Define the URL
        url = 'http://127.0.0.1:8000/api/'

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
        
        if response:
            return JsonResponse(response, safe=False)
        # else:
        #     return JsonResponse([], safe=False)
    else:
        return JsonResponse([
            {
                "text":"Please stop texting me!<br>         This is a test",
            },
            {
                "text": "I don't know who you are."
            },
        ], safe=False)