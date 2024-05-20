from app.models import db, User, Post
from app import app

with app.app_context():
  # Week 18 D3 EOD code
  # user1 = User.query.get(1)
  # print([post.content for post in user1.posts])
  # new_post = Post(content="This is my second post")
  # new_post.user = user1
  # user1.posts.append(new_post)
  # db.session.add(new_post)
  # db.session.commit()
  # print(user1.posts)

  # all_posts = Post.query.all()

  # most_liked_posts = sorted(all_posts, key=lambda post: len(post.user_likes))[-5:]
  # # print([post.user_likes for post in most_liked_posts])
  # for post in most_liked_posts:
  #   print(f"{post.user.username} made the post {post.content}, which had {len(post.user_likes)} likes.")
  #   print("The users who liked this post:")
  #   for user in post.user_likes:
  #     print(f"\t{user.username}")

  # user1.posts = []

  # Self referential relationships
