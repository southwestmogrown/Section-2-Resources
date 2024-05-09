from .db import db

likes = db.Table(
  "likes",
  db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
  db.Column("post_id", db.Integer, db.ForeignKey("posts.id"), primary_key=True)
)

class User(db.Model):
  
  __tablename__ = "users"

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String, nullable=False)

  # Relationships

  posts = db.relationship("Post", back_populates="user")
  liked_posts = db.relationship("Post", secondary="likes", back_populates="user_likes")