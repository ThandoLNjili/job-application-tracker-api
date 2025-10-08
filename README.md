# JOB Application Tracker API

Simple backend to track job applications (registration, CRUD for applications, analytics).

## Quickstart

1. Copy `.env.example` → `.env` and set values.
2. Install deps: `npm ci`
3. Run dev server: `npm run dev`
4. Health: `GET /health`

## Tech
    - Node.js + Express
    - Postgres (docker-compose include)
    - JWT auth (to implement)