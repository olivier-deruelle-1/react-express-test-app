# express-test-app
Test project of a Express backend server (monorepo) providing APIs to be used by a frontend application.

## Local execution via Visual Studio Code

- npm install
- npm run dev

## Local execution via Docker

- docker build --build-arg ENVIRONMENT=dev -t express-test-app .
- docker run -p 3000:3000 express-test-app

## Server access

- ExpressJS Server running at http://localhost:3000/