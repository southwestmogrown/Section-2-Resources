from flask import Flask, render_template, redirect, url_for
from .config import Config
import sqlite3

from .seed_data import posts

app = Flask(__name__)
app.config.from_object(Config)

DB_FILE = "dev.db"

@app.route('/', methods=["GET"])
def index():

  with sqlite3.connect(DB_FILE) as conn:
    curs = conn.cursor()

    # curs.execute(
    #             """
    #             CREATE TABLE jokes(
    #             id INTEGER PRIMARY KEY AUTOINCREMENT,
    #             joke_body VARCHAR(250),
    #             punchline VARCHAR(250),
    #             rating VARCHAR(15)
    #             );
    #             """ 
    #             )
    

    # curs.execute(
    #             """
    #             INSERT INTO jokes (joke_body, punchline, rating)
    #             VALUES(:joke_body, :punchline, :rating)
    #             """,
    #             {
    #                 "joke_body": "some joke body",
    #                 "punchline": "some joke punchline",
    #                 "rating": "some rating"
    #             }
    #             )


    # curs.execute(
    #     """
    #     SELECT *
    #     FROM jokes;
    #     """
    # )

    # # results = curs.fetchall()
    # res = curs.fetchone()
    # print(res)

  return render_template("index.html")

@app.route('/test', methods=["GET"])
def test():
  return "Hello from test"


@app.route('/all-posts', methods=["GET"])
def all_posts():
  return render_template("posts.html", posts=posts)
  # return render_template("posts.html")

@app.route('/posts/<int:post_id>')
def get_post_by_id(post_id):
  post = [post for post in posts if post["id"] == post_id]
  return render_template("posts.html", posts=post)

@app.route('/users/<int:user_id>/posts')
def get_single_users_posts(user_id):
  user_posts = [post for post in posts if post["author"]["id"] == user_id]
  return render_template("posts.html", posts=user_posts, id=user_id)

@app.route('/posts/<int:post_id>/delete', methods=["GET"])
def delete_post(post_id):
  post_to_delete = [post for post in posts if post["id"] == post_id][0]
  posts.remove(post_to_delete)
  return redirect(url_for("all_posts"))
