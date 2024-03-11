from datetime import datetime
from random import randint
from flask import Blueprint, render_template, redirect
from app.posts import posts
from app.forms.post_form import NewPost

post_routes = Blueprint("post_routes", __name__)

        
    

