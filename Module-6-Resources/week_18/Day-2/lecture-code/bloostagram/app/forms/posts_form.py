from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField
from wtforms.validators import DataRequired, Length, URL

from ..seed_data import users

user_choices = [user['username'] for user in users]

# tup = (user_id, user_username)

class PostForm(FlaskForm):
  author = SelectField("Author: ", choices=user_choices)
  caption = StringField("Caption: ", validators=[DataRequired(), Length(max=2000)])
  image = StringField("Image URL: ", validators=[DataRequired(), URL(message="Must be a url")])
  submit= SubmitField("Submit")
