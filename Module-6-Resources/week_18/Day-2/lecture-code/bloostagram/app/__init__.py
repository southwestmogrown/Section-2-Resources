from flask import Flask, render_template, redirect, url_for
from .config import Config
from .seed_data import posts

app = Flask(__name__)
app.config.from_object(Config)


@app.route("/", methods=["GET"])
def index():
  return render_template("index.html")


@app.route("/posts", methods=["GET"])
def all_posts():
  return render_template("posts.html", posts=posts, page_type="posts")


@app.route("/posts/<int:post_id>")
def get_post_by_id(post_id):
  post = [post for post in posts if post["id"] == post_id]
  return render_template("posts.html", posts=post)


@app.route("/users/<int:user_id>/posts")
def get_single_users_posts(user_id):
  user_posts = [post for post in posts if post["author"]["id"] == user_id]
  return render_template("posts.html", posts=user_posts, id=user_id, page_type="user")


@app.route("/posts/<int:post_id>/delete", methods=["GET"])
def delete_post(post_id):
  post_to_delete = [post for post in posts if post["id"] == post_id][0]
  posts.remove(post_to_delete)
  return redirect(url_for("all_posts"))
