# 🛡️ CYBRIX AI

> AI-powered cybersecurity platform for website security analysis, vulnerability scanning, and security monitoring.

## 📌 Overview

CYBRIX AI is a full-stack cybersecurity project designed to provide a centralized platform for security analysis and monitoring.

The application combines a FastAPI backend with a React frontend and SQLite database to provide authentication, AI assistance, website security scanning, scan history, and security reporting.

---

## ✨ Features

- 🔐 User Authentication
- 🤖 AI Cybersecurity Assistant
- 🔍 Website Vulnerability Scanner
- 🛡️ HTTPS Security Analysis
- 📋 Security Header Analysis
- 📊 Security Score
- ⚡ Website Response-Time Analysis
- 🗂️ Scan History
- 📄 PDF Security Reports
- 📈 Security Dashboard
- 🌐 Server Information Detection
- 🎨 Modern Cybersecurity UI

---

## 🤖 AI Assistant

CYBRIX AI includes an AI assistant designed to help users with cybersecurity-related questions and security analysis.

The assistant can be used to:

- Understand cybersecurity concepts
- Analyze security-related information
- Provide security recommendations
- Assist users with cybersecurity tasks

---

## 🔍 Vulnerability Scanner

The vulnerability scanner allows users to analyze a website by entering its URL.

The scanner checks:

- HTTPS availability
- Website status
- Response time
- Server information
- Content-Security-Policy
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options

A security score is calculated based on the available security protections.

---

## 📊 Scan History

CYBRIX AI stores completed website scans in a SQLite database.

Users can view previous scans including:

- Website URL
- Status
- HTTPS status
- Response time
- Server
- Security score

The backend provides a dedicated API endpoint for retrieving scan history.

---

## 📄 PDF Security Reports

After completing a website scan, users can generate a PDF report containing the scan results.

The report includes:

- Website URL
- Website status
- HTTPS status
- Response time
- Server information
- Security score
- Security header analysis

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Axios
- React Router
- CSS

### Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic
- Requests
- JWT Authentication

### Database

- SQLite

### AI

- Google Gemini API

### Reporting

- jsPDF

---

## 📁 Project Structure

```text
CYBER_JARVIS/
│
├── backend/
│   └── app/
│       ├── api/
│       │   ├── auth.py
│       │   ├── users.py
│       │   ├── chat.py
│       │   └── scanner.py
│       │
│       ├── database/
│       │   ├── database.py
│       │   └── models.py
│       │
│       ├── services/
│       │   └── scanner.py
│       │
│       └── main.py
│
├── database/
│
├── docs/
│
├── frontend/
│   ├── public/
│   │
│   └── src/
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── styles/
│       ├── utils/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── .gitignore
└── README.md