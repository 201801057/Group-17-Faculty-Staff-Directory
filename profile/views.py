from django.contrib import messages 
from django.contrib.auth import authenticate,login,logout
from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm
from django.http.response import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import Group, User
from .forms import ProfileAdd#,UserRegister
from .models import Profile
#from .forms import SingUpRequestform
#from django.core.mail import send_mail, BadHeaderError
#from django.views.generic import ListView
import json



#User profile
def profileDataAddForm(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            form=ProfileAdd(request.POST,request.FILES)
            if form.is_valid():
                profile=form.save(commit=False)
                profile.user=request.user
                usersList.append(request.user)
                profile.save()
                return redirect('profile')
        else:
            form=ProfileAdd()
        return render(request, 'faculty/profileForm.html',{'form':form})
    else:
        return redirect('login')

def profileData(request):
    if request.user.is_authenticated:
        try:
            data=Profile.objects.get(user=request.user)
        except:
            return redirect('profileForm')
        return render(request,'faculty/profile.html',{'data':data})
    else:
        return redirect('login')