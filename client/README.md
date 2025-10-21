# react-test-app
Test project of a front-end React app connected to a Express backend server (monorepo)

## Installation

- npm install

## Local execution via Visual Studio Code

- npm run dev

## Local execution via Docker

- docker build --build-arg ENVIRONMENT=dev -t react-test-app .
- docker run -p 5000:80 react-test-app

## App access

- React App running at http://localhost:5000/
