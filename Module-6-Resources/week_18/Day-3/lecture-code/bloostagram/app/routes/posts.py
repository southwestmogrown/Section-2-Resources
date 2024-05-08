from flask import Blueprint, render_template, redirect, url_for
from ..forms import PostForm
from datetime import datetime
from ..models import db, User, Post

from ..seed_data import posts, users

posts_router = Blueprint('posts', __name__, url_prefix='/posts')

@posts_router.route("/", methods=["GET"])
def all_posts():
  posts = Post.query.all()
  return render_template("posts.html", posts=posts, page_type="posts")


@posts_router.route("/<int:post_id>")
def get_post_by_id(post_id):
  post = Post.query.get(post_id)
  # post = [post for post in posts if post["id"] == post_id]
  return render_template("posts.html", posts=[post])


@posts_router.route("/<int:post_id>/delete", methods=["GET"])
def delete_post(post_id):
  # post_to_delete = [post for post in posts if post["id"] == post_id][0]
  # print(post_to_delete)
  # posts.remove(post_to_delete)

  post_to_delete = Post.query.get(post_id)
  db.session.delete(post_to_delete)
  db.session.commit()
  return redirect(url_for("posts.all_posts"))


@posts_router.route('/new', methods=["GET", "POST"])
def create_new_post():
  form = PostForm()
  # print(form.data["image"])
  # print(form.errors)
  form.author.choices = [(user.id, user.username) for user in User.query.all()]

  if form.validate_on_submit():
    print(type(form.data["author"]))
    new_post = {
      "author_id": int(form.data["author"]),
      "caption": form.data["caption"],
      "image": form.data["image"],
    }

    create_post = Post(**new_post)
    db.session.add(create_post)
    db.session.commit()

    print(new_post)
    # posts.append(new_post)
    return redirect('/posts')


  if form.errors:
    print(form.errors['image'][0])

  return render_template("new_post.html", form=form)


@posts_router.route('/<int:post_id>/update')
def update_post_form(post_id):
  form = PostForm()

  # post_to_update = [post for post in posts if post["id"] == post_id][0]
  # print(post_to_update)
  form.author.choices = [(user.id, user.username) for user in User.query.all()]

  post_to_update = Post.query.get(post_id)

  form.process(data=post_to_update.to_dict())

  return render_template("new_post.html", form=form, id=post_id)


@posts_router.route('/<int:post_id>/update', methods=["POST"])
def update_post(post_id):
  form = PostForm()
  form.author.choices = [(user.id, user.username) for user in User.query.all()]

  if form.validate_on_submit():
    post_to_update = Post.query.get(post_id)

    post_to_update.author_id = form.data["author"]
    post_to_update.caption = form.data["caption"]
    post_to_update.image = form.data["image"]

    # for idx in range(len(posts)):
    #   if posts[idx]['id'] == post_id:
    #     post_to_update = idx

    # posts[post_to_update] = new_post

    db.session.commit()

    return redirect('/posts')
  
  if form.errors:

    print(form.errors)
  
  return render_template("new_post.html", form=form, id=post_id)