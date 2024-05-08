from flask import Flask
from flask_migrate import Migrate
from .config import Config
from .models import db
from .seeds import seed_commands

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
Migrate(app, db)
app.cli.add_command(seed_commands)