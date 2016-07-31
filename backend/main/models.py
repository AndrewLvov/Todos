from ..app import db


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)

    __tablename__ = 'notes'
