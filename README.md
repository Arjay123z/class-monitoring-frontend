# Class Monitoring and Management System – Frontend

Frontend of the Class Monitoring and Management System for the Computer Laboratory of CBIT.
Built with React, TypeScript, and Vite, using mock data based on the project SRS.

## Run locally

1. Install Node.js (v24 or newer).
2. Run: npm install
3. Run: npm run dev
4. Open the address shown in the terminal (usually http://localhost:5173)

## Run with Docker

1. Install Docker Desktop and make sure it is running.
2. Run: docker compose up --build -d
3. Open: http://localhost:8080
4. Stop: docker compose down

## Deployment

- Live site: https://class-monitoring-frontend.vercel.app
- Hosting: Vercel, connected to this GitHub repository.
- CI: GitHub Actions (.github/workflows/ci.yml) installs, lints, and builds the project on every pull request and every push to main.
- Every merge to main deploys automatically to production. Every pull request gets a Vercel preview link.

To run locally: npm install, then npm run dev.
