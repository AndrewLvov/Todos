SQLALCHEMY_DATABASE_URI = \
    "postgresql://db_user:db_pass@localhost/database"

SQLALCHEMY_TRACK_MODIFICATIONS = True


try:
    from local_settings import *
except ImportError:
    pass
