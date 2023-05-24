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

## Get Profile
- path: /api/v1/account/profile
- method: GET
- authorization: Bearer Token
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

## Edit Password
- path: /api/v1/account/edit-password
- method: PUT
- authorization: Bearer Token
- response
> {
    "error": false,
    "message": "Password edited successfully"
}

## Edit Profile Picture
- path: /api/v1/account/edit-image
- method: PUT
- authorization: Bearer Token
- response
> {
    "error": false,
    "message": "Profile picture updated successfully"
}

## Get All Lesson
- path: /api/v1/lessons
- method: GET
- response
> {
    "error": false,
    "message": "success",
    "data": [
        {
            "createdAt": "Tue May 23 2023 09:50:47 GMT+0000 (Coordinated Universal Time)",
            "_id": "646c87515239fc691f84a441",
            "lessonName": "apaya",
            "description": "lorem ipsum embuh",
            "imageUrl": "https://storage.googleapis.com/testing-patuli/placeholder-image.png"
        },
        {
            "createdAt": "Tue May 23 2023 09:50:47 GMT+0000 (Coordinated Universal Time)",
            "_id": "646c87985239fc691f84a444",
            "lessonName": "apaya 2",
            "description": "lorem ipsum embuh 2",
            "imageUrl": "https://storage.googleapis.com/testing-patuli/placeholder-image.png"
        },
        {
            "createdAt": "Tue May 23 2023 09:50:47 GMT+0000 (Coordinated Universal Time)",
            "_id": "646c8ace176d67417472ee44",
            "lessonName": "apaya 3",
            "description": "lorem ipsum embuh 3",
            "imageUrl": "https://storage.googleapis.com/testing-patuli/placeholder-image.png"
        },
        {
            "createdAt": "Tue May 23 2023 09:50:47 GMT+0000 (Coordinated Universal Time)",
            "_id": "646c8b12176d67417472ee45",
            "lessonName": "apaya 4",
            "description": "lorem ipsum embuh 4",
            "imageUrl": "https://storage.googleapis.com/testing-patuli/placeholder-image.png"
        },
        {
            "createdAt": "Tue May 23 2023 09:50:47 GMT+0000 (Coordinated Universal Time)",
            "_id": "646c8b24176d67417472ee46",
            "lessonName": "apaya 5",
            "description": "lorem ipsum embuh 5",
            "imageUrl": "https://storage.googleapis.com/testing-patuli/placeholder-image.png"
        },
        {
            "createdAt": "Tue May 23 2023 09:50:47 GMT+0000 (Coordinated Universal Time)",
            "_id": "646c8b2f176d67417472ee47",
            "lessonName": "apaya 6",
            "description": "lorem ipsum embuh 6",
            "imageUrl": "https://storage.googleapis.com/testing-patuli/placeholder-image.png"
        }
    ]
}

## Get Lesson by Id
- path: /api/v1/lessons/{id}
- method: GET
- response
> {
    "error": false,
    "message": "success",
    "data": {
        "createdAt": "Tue May 23 2023 16:35:43 GMT+0700 (Western Indonesia Time)",
        "_id": "646c87985239fc691f84a444",
        "lessonName": "apaya 2",
        "description": "lorem ipsum embuh 2",
        "imageUrl": "https://storage.googleapis.com/testing-patuli/placeholder-image.png"
    }
}


## lain-lain
Jangan lupa buat file .env

