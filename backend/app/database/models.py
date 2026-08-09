from sqlalchemy import Column, Integer, String, Float
from app.database.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)


class ScanHistory(Base):
    __tablename__ = "scan_history"

    id = Column(Integer, primary_key=True, index=True)

    url = Column(String(500), nullable=False)

    status = Column(String(50), nullable=False)

    https = Column(String(20), nullable=False)

    response_time = Column(Float, nullable=False)

    server = Column(String(100), nullable=False)

    score = Column(Integer, nullable=False)