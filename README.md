# Backend-Patuli

## Register
- path: /api/v1/auth/register
- method: POST
- response:
> {
    "error": false,
    "message": "Account Created",
    "data": {
        "name": "Vallianzx",
        "email": "vaa1@gmail.com",
        "password": "$2b$12$OVZdQkeRhdCV2dC1x75.6eyij59LWjlPH5JJIakXj32EYe/sbPmMG",
        "_id": "6467291bcc9136a4fa8866ef",
        "createdAt": "1684482331288",
        "__v": 0
    }
}

## Login
- path: /api/v1/auth/login
- method: POST
- response:
> {
    "error": false,
    "message": "success",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjcyOTFiY2M5MTM2YTRmYTg4NjZlZiIsImlhdCI6MTY4NDQ4MjU0M30.CodjUDEPqylNTzxENI52K8nSVyu884fNqrhDIVxIIXA"
    }
}

## getProfile
- path: /api/v1/account/profile
- method: GET
- response
> {
    "error": false,
    "message": "success",
    "data": {
        "_id": "6467291bcc9136a4fa8866ef",
        "name": "Vallianzx",
        "email": "vaa1@gmail.com",
        "password": "$2b$12$OVZdQkeRhdCV2dC1x75.6eyij59LWjlPH5JJIakXj32EYe/sbPmMG",
        "createdAt": "1684482331288",
        "__v": 0
    }
}

## lain-lain
Jangan lupa buat file .env
Contoh isinya

KEY = gpRnbU2fBkxr995sxuTZ5b8Pz9i0wHN5
MONGO_DB = mongodb://localhost:27017/

MONGO_DB sesuaikan sendiri dengan punyamu
KEY bebas kalau mau ganti yang penting secret

