# Description

- We use Express.js to create this API endpoints as backend
- For deployment we are using App Engine service by Google Cloud Platform
- For database we are using MongoDB Atlas
- For storing images we use Google Cloud Storage
- For auto deployment we use Cloud Build by Google Cloud Platform, and setup cloudbuild.yaml before doing that

# Endpoints

## Register
- Method: POST
- Path URL: /api/v1/auth/register
- Header: -
- Body:
    - name: string
    - email: string(email)
    - password: string(min 8 max 20 digit)
    - passwordConfirmation: string(must be the same as password)
- Authorization: -
- Response (example):
