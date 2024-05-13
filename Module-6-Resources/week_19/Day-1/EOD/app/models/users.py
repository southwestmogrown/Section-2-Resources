from .db import db

likes = db.Table(
  "likes",
  db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
  db.Column("post_id", db.Integer, db.ForeignKey("posts.id"), primary_key=True)
)

follows = db.Table(
  "follows",
  db.Column("follower", db.Integer, db.ForeignKey("users.id"), primary_key=True),
  db.Column("followed", db.Integer, db.ForeignKey("users.id"), primary_key=True)
)

class User(db.Model):
  
  __tablename__ = "users"

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String, nullable=False)

  # Relationships

  posts = db.relationship("Post", back_populates="user", cascade="all, delete-orphan")
  liked_posts = db.relationship("Post", secondary="likes", back_populates="user_likes")

  # Self referential relationships
  followers = db.relationship(
    "User",
    secondary="follows",
    # this user will be placed into the "followed" column
    primaryjoin=follows.columns.followed == id,
    # the other will be placed into the "follower" column
    secondaryjoin=follows.columns.follower == id,
    # which is which doesn't technically matter, the follows column could
    # just be labeled a and b, for example, but make sure you're consistent
    # with backref, the other attribute is automatically created
    # backref = "following"
    back_populates="following"
  )

  following = db.relationship(
    "User",
    secondary="follows",
    primaryjoin=follows.c.follower == id,
    secondaryjoin = follows.c.followed == id,
    back_populates="followers"
  )