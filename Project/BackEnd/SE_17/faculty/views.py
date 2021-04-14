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

usersList=[]
searchDataList=[]

#Search Page
def search_data(request):
    if request.method=='POST':
        s_name=request.POST.get("NAME",None)
        s_catagory=request.POST.get("CATAGORY",None)
        s_sort=request.POST.get("SORT",None)
        s_order=request.POST.get("ORDER",None)
        
        s_name=s_name.lower()
        s_name=s_name.split(" ")
        
        if s_order=="A-Z":
            if s_sort!="":
                data=Profile.objects.order_by(s_sort)
              
            else:
                data=Profile.objects.all()
             
        else:
            if s_sort!="":
                data=Profile.objects.order_by("-"+s_sort)
                
            else:
                data=Profile.objects.all()
               
        l=[]
        page=[]
        searchDataList.clear()
        for d in data:
            if d.hide == False :
             for i in s_name:
                if i in d.name.lower() or i in d.email.lower() or i in d.department.lower() or i in d.inst_name.lower() or i in d.courses.lower() or i in d.education.lower() or i in d.pro_int.lower():
                    l.append(d)
                    searchDataList.append(d)
                    break
        lq=(int(len(searchDataList))+int(2))//3
        for i in range(lq):
            page.append(i)
    
        ll=l[0:3]
        return render(request,'faculty/searchPageData.html',{'data':ll,'page':page})
    else:
        return render(request,'faculty/search_form.html')

def searchGetData(request,k):
    data=Profile.objects.get(pk=k)
    return render(request,'faculty/searchGetData.html',{'data':data})

def searchPageData(request,k):
    print(int(k))
    ll=searchDataList[3*int(k):3*int(k)+3]
    page=[]
    lq=(int(len(searchDataList))+int(2))//3
    for i in range(lq):
        page.append(i)
    return render(request,'faculty/searchPageData.html',{'data':ll,'page':page})

def homeSearch(request,k):
    data=Profile.objects.filter(inst_name=k)
    return render(request,'faculty/homeCollege.html',{'data':data})

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