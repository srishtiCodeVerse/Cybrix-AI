import requests
import time

from app.database.database import SessionLocal
from app.database.models import ScanHistory


def scan_website(url: str):

    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    result = {
        "url": url,
        "https": False,
        "status": "Offline",
        "response_time": 0,
        "server": "Unknown",
        "headers": {
            "Content-Security-Policy": False,
            "Strict-Transport-Security": False,
            "X-Frame-Options": False,
            "X-Content-Type-Options": False,
        },
        "score": 0,
    }

    try:

        start = time.time()

        response = requests.get(
            url,
            timeout=10,
            allow_redirects=True,
        )

        end = time.time()

        result["status"] = "Online"
        result["response_time"] = round((end - start) * 1000, 2)
        result["server"] = response.headers.get("Server", "Unknown")

        if response.url.startswith("https://"):
            result["https"] = True
            result["score"] += 40

        security_headers = [
            "Content-Security-Policy",
            "Strict-Transport-Security",
            "X-Frame-Options",
            "X-Content-Type-Options",
        ]

        for header in security_headers:
            exists = header in response.headers
            result["headers"][header] = exists

            if exists:
                result["score"] += 15

        if result["score"] > 100:
            result["score"] = 100

        # ==========================
        # Save Scan History
        # ==========================

        db = SessionLocal()

        history = ScanHistory(
            url=result["url"],
            status=result["status"],
            https="Enabled" if result["https"] else "Disabled",
            response_time=result["response_time"],
            server=result["server"],
            score=result["score"],
        )

        db.add(history)
        db.commit()
        db.close()

    except requests.exceptions.RequestException as e:

        result["status"] = "Offline"
        result["error"] = str(e)

    return result