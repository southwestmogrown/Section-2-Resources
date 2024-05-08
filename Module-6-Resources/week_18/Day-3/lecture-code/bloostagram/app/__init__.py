from flask import Flask, render_template, redirect, url_for
from .config import Config
from .seed_data import posts
from .routes import posts_router, users_router
from .models import db

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
app.register_blueprint(posts_router)
app.register_blueprint(users_router)


@app.route("/", methods=["GET"])
def index():
  # return '<h1>Welcome to Bloostagram!</h1>'
  return render_template("index.html")



