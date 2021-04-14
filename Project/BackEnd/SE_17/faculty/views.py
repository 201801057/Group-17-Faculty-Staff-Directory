from django.shortcuts import render
from django.contrib import messages 
from django.contrib.auth import authenticate,login,logout
from django.shortcuts import render,redirect
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm
from .forms import SingUpRequestform
from django.core.mail import send_mail, BadHeaderError
from django.http.response import HttpResponse, HttpResponseRedirect
# Create your views here.

#Home Page
def home(request):
    return render(request,'faculty/home.html')

#LogIn page
def user_login(request):
    if not request.user.is_authenticated:
        if request.method == "POST":
            form = AuthenticationForm(request=request,data=request.POST)
            if form.is_valid():
                uname=form.cleaned_data['username']
                upass=form.cleaned_data['password']
                user= authenticate(username=uname,password=upass)
                if user is not None :
                    login(request,user)
                    return redirect('home')
        else :
            form = AuthenticationForm()
        return render(request,'faculty/login.html',{'form':form})
    else :
      return render(request,'faculty/home.html')

def SingupRequest(request):
   if request.method == "POST":
      RequestForm = SingUpRequestform(request.POST)
      if RequestForm.is_valid():
         name = RequestForm.cleaned_data['name']
         description = RequestForm.cleaned_data['description']
         email = RequestForm.cleaned_data['email']
         
         subject = "Sing Up Request From " + name
         msg = "Name: " + name + "\n" + description

         try:
            send_mail(subject,msg,None,['DjangoAdmin@gmail.com'],fail_silently='False')
            send_mail("Sing up request sent","test1",None,[email],fail_silently='False')
            messages.success(request,'Mail sent !!')
         except BadHeaderError:
            messages.error(request,"Somthing went wrong\n")
         
   RequestForm = SingUpRequestform()
   return render(request,'faculty/singuprequest.html',{'form':RequestForm})