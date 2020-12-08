# beta-blog-be

### AUTH
|         URL     |      ENDPOINT      |         DESCRIPTION     |
| ------------- | ------------- | -------------|
| POST          | /auth/register | register user|
| POST          | /auth/login    | login user   |

---

### Register / Login
#### Json Format
>**NOTE:** 
*Username and Email must be unique and will not be created if they already exist*

**Register**
 ```json 
{
    "first_name": "First Name",
    "last_name": "Last Name",
    "username": "username",
    "email": "email@email.com",
    "password": "password-goes-here"
}
```
**Login**
 ```json 
{
    "username": "username",
    "password": "password-goes-here"
}
```
---

### USER
|         URL     |      ENDPOINT      |         DESCRIPTION     |
| ------------- | ------------- | -------------|
| PUT          | /auth/user          | Update user information|
| DELETE          | auth/user    |  delete user account   |

---