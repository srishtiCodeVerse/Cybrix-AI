from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.schemas.user import UserCreate
from app.database.database import SessionLocal
from app.database.models import User
from app.core.security import hash_password

router = APIRouter()

@router.post("/register")
def register(user: UserCreate):

    db: Session = SessionLocal()

    hashed_password = hash_password(user.password)

    new_user = User(
        username=user.username,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    db.close()

    return {
        "message": "User Registered Successfully",
        "id": new_user.id,
        "username": new_user.username,
        "email": new_user.email
    }