from .db import db

class Post(db.Model):

  __tablename__ = "posts"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  content = db.Column(db.String(2000), nullable=False)

  # Relationships

  user = db.relationship("User", back_populates="posts")
  user_likes = db.relationship("User", secondary="likes", back_populates="liked_posts")

  def to_dict(self):
    return {
      "id": self.id,
      "user": self.user.id,
      "user_likes": [user.id for user in self.user_likes]
    }