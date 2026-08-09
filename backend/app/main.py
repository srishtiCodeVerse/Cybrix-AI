from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import engine, Base
from app.database.models import User

from app.api.users import router as user_router
from app.api.auth import router as auth_router
from app.api.chat import router as chat_router
from app.api.scanner import router as scanner_router

app = FastAPI(
    title="CYBRIX AI API",
    version="1.0.0",
    description="Backend API for CYBRIX AI"
)

# ==========================
# CORS Configuration
# ==========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Create Database Tables
# ==========================
Base.metadata.create_all(bind=engine)

# ==========================
# Routers
# ==========================
app.include_router(user_router)
app.include_router(auth_router)
app.include_router(chat_router)
app.include_router(scanner_router)