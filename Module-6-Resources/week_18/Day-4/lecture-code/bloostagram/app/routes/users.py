from flask import Blueprint, render_template
from ..models import db, Post

# from ..seed_data import posts

users_router = Blueprint("users", __name__, url_prefix="/users")


@users_router.route("/<int:user_id>/posts")
def get_single_users_posts(user_id):
  # user_posts = [post for post in posts if post["author"]["id"] == user_id]
  # user_posts = Post.query.filter(Post, user_id).all()
  posts = Post.query.all()
  user_posts = [post for post in posts if post.author.id == user_id]
  return render_template("posts.html", posts=user_posts, id=user_id, page_type="user")