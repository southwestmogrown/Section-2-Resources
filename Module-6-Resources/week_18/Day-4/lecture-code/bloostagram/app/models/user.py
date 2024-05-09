from .db import db

likes = db.Table("likes", 
                 db.Column("author_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
                 db.Column("post_id", db.Integer, db.ForeignKey("posts.id"), primary_key=True)
                 )

class User(db.Model):
  __tablename__ = "users"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), nullable=False)
  username = db.Column(db.String(55), nullable=False, unique=True)

  posts = db.relationship("Post", back_populates="author")
  liked_posts = db.relationship("Post", secondary="likes", back_populates="user_likes")

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.id,
      "posts": [post.to_dict(from_author=True) for post in self.posts]
    }