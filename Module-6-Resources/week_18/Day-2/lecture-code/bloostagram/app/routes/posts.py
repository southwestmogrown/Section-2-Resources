from flask import Blueprint, render_template, redirect, url_for

from ..seed_data import posts

posts_router = Blueprint('posts', __name__, url_prefix='/posts')

@posts_router.route("/", methods=["GET"])
def all_posts():
  return render_template("posts.html", posts=posts, page_type="posts")


@posts_router.route("/<int:post_id>")
def get_post_by_id(post_id):
  post = [post for post in posts if post["id"] == post_id]
  return render_template("posts.html", posts=post)


@posts_router.route("/<int:post_id>/delete", methods=["GET"])
def delete_post(post_id):
  post_to_delete = [post for post in posts if post["id"] == post_id][0]
  posts.remove(post_to_delete)
  return redirect(url_for("all_posts"))