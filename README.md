# Beta Blog Back End

### AUTH
|         URL     |      ENDPOINT      |         DESCRIPTION     |
| ------------- | ------------- | -------------|
| POST          | /auth/register | register user|
| POST          | /auth/login    | login user   |
| PUT          | /auth/:id          | Update user information|
| DELETE          | auth/    |  delete user account   |
| GET          | auth/1  |  Get user by id   |
| GET          | auth/1/details    |  Get user's posts   |

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
**Update User**
```json 
{   "id":"User ID",
    "first_name": "First Name",
    "last_name": "Last Name",
    "username": "username",
    "email": "email@email.com",
    "password": "password-goes-here",
    "id":"user id"
}
```
---


### POSTS
|         URL     |      ENDPOINT      |         DESCRIPTION     |
| ------------- | ------------- | -------------|
| GET            | /post       |Gets all posts  |
| POST            | /post       |Add new post  |
| GET            | /post/:id       |Gets post by id  |
| PUT            | /post/:id       |Update post by id  |
| GET            | /post/:id/details       |Get post's comments  |

---

### Add Post / Update Post
#### Json Format
>**NOTE:** 
*Space for Notes*

**Add Post**
 ```json 
{
   "title":"Blog Title",
    "content":"Blog Article",
    "topic":"Tagged Topic",
    "user_id":"1"
}
```
---

**Update Post**
```json 
{   "id":"Post ID", 
    "title":"Blog Title",
    "content":"Blog Article",
    "topic":"Tagged Topic",
    "user_id":"1"
}
```
---

### COMMENTS
|         URL     |      ENDPOINT      |         DESCRIPTION     |
| ------------- | ------------- | -------------|
| GET            | /comment       |Gets all comment |
| POST            | /comment     |Add new comment|
| GET            | /comment/:id       |Gets commentby id  |
| PUT            | /comment/:id       |Update comment by id  |
| GET            | /comment/:id/details       | Get comment notifications |

---
### Add Comment / Update Comment
#### Json Format
>**NOTE:** 
*Space for notes*

**Add Comment**
```json 
{
    "comment":"Comment on Post",
    "post_id":"1"
}

```
---
**Update Comment**
```json 
{
    "id":"Comment ID",
    "comment":"Comment on Post",
    "post_id":"1"
}

```
---