from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.database.models import User

from app.core.security import (
    verify_password,
    create_access_token,
    get_current_user
)

router = APIRouter()


@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends()
):

    db: Session = SessionLocal()

    db_user = db.query(User).filter(
        User.email == form_data.username
    ).first()

    if not db_user:
        db.close()
        raise HTTPException(
            status_code=401,
            detail="Invalid Email"
        )

    if not verify_password(
        form_data.password,
        db_user.password
    ):
        db.close()
        raise HTTPException(
            status_code=401,
            detail="Invalid Password"
        )

    token = create_access_token(
        {
            "sub": db_user.email
        }
    )

    db.close()

    return {
        "access_token": token,
        "token_type": "bearer",
        "username": db_user.username
    }


@router.get("/me")
def get_me(
    current_user: str = Depends(get_current_user)
):

    db: Session = SessionLocal()

    user = db.query(User).filter(
        User.email == current_user
    ).first()

    db.close()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User Not Found"
        )

    return {
        "id": user.id,
        "username": user.username,
        "email": user.email
    }