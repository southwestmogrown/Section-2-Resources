from flask import Flask, render_template, redirect, url_for
from flask_migrate import Migrate
from .config import Config
from .seed_data import posts
from .routes import posts_router, users_router
from .models import db
from .seeds import seed_commands

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
Migrate(app, db)
app.cli.add_command(seed_commands)
app.register_blueprint(posts_router)
app.register_blueprint(users_router)


@app.route("/", methods=["GET"])
def index():
  # return '<h1>Welcome to Bloostagram!</h1>'
  return render_template("index.html")



