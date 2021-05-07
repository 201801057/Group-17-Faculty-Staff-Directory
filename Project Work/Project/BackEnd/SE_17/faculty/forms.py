from django.forms import fields, ModelForm, widgets,DateInput,TimeInput
from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm, UsernameField
from django.contrib.auth.models import User
from django.forms.models import ModelFormMetaclass
from .models import Profile


class UserRegister(UserCreationForm):
    email = forms.EmailField(max_length=50)
    password1= forms.CharField(label="password",widget=forms.PasswordInput(attrs={'class':'form-control'}),required=False)
    password2= forms.CharField(label="Repeat password",widget=forms.PasswordInput(attrs={'class':'form-control'}),required=False)
    class Meta:
        model = User
        fields = ['username']
        labels = {'username':'Username'}
        widgets={'username':forms.TextInput(attrs={'class':'form-control'})}
        
#Login
class Login(AuthenticationForm):
   username = UsernameField(widget=forms.TextInput(attrs=
   {'autofocus':True,'class':'form-control'}))
   password = forms.CharField(label=("Password"),strip=False,
   widget=forms.PasswordInput(attrs={'autocomplete':'current-password','class':'form-control'})) 


#sign up request form
class SingUpRequestform(forms.Form):
   name = forms.CharField(max_length=30)
   email = forms.EmailField(max_length=40)
   description = forms.CharField(max_length=200)

#Profile
class ProfileAdd(ModelForm):
    class Meta: 
        model=Profile
        fields=['name','email','department','inst_name','courses','education','pro_int','area_exp','image']
        labels={'name':'Name','email':'Email ID','department': 'Department','inst_name':'Institute','courses':'Courses','education':'Education','pro_int':'Interest','area_exp':'Expertise','image':'Image'}

