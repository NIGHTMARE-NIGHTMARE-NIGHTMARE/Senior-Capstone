from django.shortcuts import render

TEMPLATES_DIRS = (
    'os.path.join(BASE_DIR, "templates"),'
)
def home(request):
    return render(request, "home.html", {})
# Create your views here.
