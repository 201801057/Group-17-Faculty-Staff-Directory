from django.forms import fields, ModelForm, widgets,DateInput,TimeInput
from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm, UsernameField
from django.contrib.auth.models import User
from django.forms import widgets
from django.forms.models import ModelFormMetaclass
from .models import Profile

#Login
class Login(AuthenticationForm):
   username = UsernameField(widget=forms.TextInput(attrs=
   {'autofocus':True,'class':'form-control'}))
   password = forms.CharField(label=("Password"),strip=False,
   widget=forms.PasswordInput(attrs={'autocomplete':'current-password','class':'form-control'})) 

