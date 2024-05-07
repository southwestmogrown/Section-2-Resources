from flask import Blueprint, render_template, redirect, url_for
from ..forms import PostForm
from datetime import datetime

from ..seed_data import posts, users

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
  # print(post_to_delete)
  posts.remove(post_to_delete)
  return redirect(url_for("posts.all_posts"))


@posts_router.route('/new', methods=["GET", "POST"])
def create_new_post():
  form = PostForm()
  # print(form.data["image"])
  # print(form.errors)

  if form.validate_on_submit():
    author = [user for user in users if user["username"] == form.data["author"]][0]

    new_post = {
      "id": len(posts) + 1,
      "author": author,
      "caption": form.data["caption"],
      "image": form.data["image"],
      "date": datetime.now(),
      "likes": 0
    }

    print(new_post)
    posts.append(new_post)
    return redirect('/posts')


  if form.errors:
    print(form.errors['image'][0])

  return render_template("new_post.html", form=form)


@posts_router.route('/<int:post_id>/update')
def update_post_form(post_id):
  form = PostForm()

  post_to_update = [post for post in posts if post["id"] == post_id][0]
  # print(post_to_update)

  form.process(data=post_to_update)

  return render_template("new_post.html", form=form, id=post_id)


@posts_router.route('/<int:post_id>/update', methods=["POST"])
def update_post(post_id):
  form = PostForm()

  if form.validate_on_submit():
    author = [user for user in users if user["username"] == form.data["author"]][0]

    new_post = {
      "id": post_id,
      "author": author,
      "caption": form.data["caption"],
      "image": form.data["image"],
      "date": datetime.now(),
      "likes": 0
    }

    post_to_update = [idx for (idx, post) in enumerate(posts) if post["id"] == post_id][0]
    # for idx in range(len(posts)):
    #   if posts[idx]['id'] == post_id:
    #     post_to_update = idx

    posts[post_to_update] = new_post

    return redirect('/posts')
  
  if form.errors:

    print(form.errors)
  
  return render_template("new_post.html", form=form, id=post_id)