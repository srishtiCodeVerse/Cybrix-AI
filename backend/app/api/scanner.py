from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.services.scanner import scan_website
from app.database.database import SessionLocal
from app.database.models import ScanHistory

router = APIRouter(
    prefix="",
    tags=["Scanner"]
)


class ScanRequest(BaseModel):
    url: str


@router.post("/scan")
def scan(data: ScanRequest):

    url = data.url.strip()

    if not url:
        raise HTTPException(
            status_code=400,
            detail="URL is required"
        )

    result = scan_website(url)

    return result


@router.get("/history")
def get_history():

    db: Session = SessionLocal()

    scans = (
        db.query(ScanHistory)
        .order_by(ScanHistory.id.desc())
        .limit(20)
        .all()
    )

    result = []

    for scan in scans:
        result.append(
            {
                "id": scan.id,
                "url": scan.url,
                "status": scan.status,
                "https": scan.https,
                "response_time": scan.response_time,
                "server": scan.server,
                "score": scan.score,
            }
        )

    db.close()

    return result