# Backend-Patuli

## Register
- path: /api/v1/auth/register
- method: POST
- response:
> {
    "error": false,
    "message": null,
    "data": {
        "name": "Vallianzz",
        "email": "vaa@gmail.com",
        "password": "$2b$12$Y44A0TgSpaRU6PQyCDzZkuTpsggQHo7Ew0.C4yMvz/pncFoZZkXAC",
        "_id": "646724db63cd4270d4225735",
        "createdAt": "1684481244003",
        "__v": 0
    }
}

## Login
- path: /api/v1/auth/login
- method: POST
- response:
> {
    "error": false,
    "message": null,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjcxYmMxODY0ZjQwMmQ5MTE2ODcxNyIsImlhdCI6MTY4NDQ4MTMyN30.VAfmDMSAcpll9ibCFq6tVlWweFYhUWJ2oEj3Ep5X5KI"
    }
}

## getProfile
- path: /api/v1/account/profile
- method: GET
- response
> {
    "error": false,
    "message": null,
    "data": {
        "_id": "64671bc1864f402d91168717",
        "name": "test",
        "email": "test123@gmail.com",
        "password": "$2b$12$h9OS1LIgGZ5.8anZiL0Vb.yMvg2frFytHCOKF8vQOcbLj1T9j5zzG",
        "createdAt": "1684478913215",
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

