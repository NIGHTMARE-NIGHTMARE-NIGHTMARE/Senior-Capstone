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
    message = request.POST.get('message')
    print(message)

    data = [
        {
            "text": "This is a test message from rasa!",
        },
        {
            "text": "This is rasa's second message so we can handle 2 messages at once."
        }
    ]
    return JsonResponse(data)