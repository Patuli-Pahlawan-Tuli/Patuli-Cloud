# Backend-Patuli

## Register
- path: /api/v1/auth/register
- method: POST
- response:
> {
    "error": false,
    "message": "Account Created",
    "data": {
        "name": "Vincentius Bruh",
        "email": "Vincentiusss@gmail.com",
        "password": "$2b$12$Y8eozXCgs3SZAIcCV47gGutVO73ks7x5k/2Ed4JIDQZnQ5u.P9MTu",
        "createdAt": "Sun May 21 2023 22:12:00 GMT+0700 (Western Indonesia Time)",
        "_id": "646a34cf5b1cef3b56d90bff",
        "imageUrl": "https://storage.googleapis.com/testing-patuli/placeholder-image.png",
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
        "id": "646a34cf5b1cef3b56d90bff",
        "name": "Vincentius Bruh",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmEzNGNmNWIxY2VmM2I1NmQ5MGJmZiIsImlhdCI6MTY4NDY4MTk2Mn0.ChtCBF-__TRBjZPNIHHTQrL8htSBkG7P8IlUJCrwOSc"
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
        "_id": "646a34cf5b1cef3b56d90bff",
        "name": "Vincentius Bruh",
        "email": "Vincentiusss@gmail.com",
        "password": "$2b$12$Y8eozXCgs3SZAIcCV47gGutVO73ks7x5k/2Ed4JIDQZnQ5u.P9MTu",
        "createdAt": "Sun May 21 2023 22:12:00 GMT+0700 (Western Indonesia Time)",
        "imageUrl": "https://storage.googleapis.com/testing-patuli/placeholder-image.png",
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

