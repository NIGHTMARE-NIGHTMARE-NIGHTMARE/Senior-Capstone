from django.shortcuts import render

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