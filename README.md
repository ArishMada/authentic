**BackEndThings**

-SignUp
![image](https://github.com/ArishMada/authentic/assets/91464375/ced74aeb-6a6c-48b5-9679-0afa07e4adc1)

The signup will automatically make an account and store that in the sql (local sql as the requirement) BTW it is hashed ya Very Safety indeed

-Login

After we signup we will login with implementation of OAUTH2 

![image](https://github.com/ArishMada/authentic/assets/91464375/4d8caa06-4883-45e4-9263-a86e28737e29)

Where we get the token so we can see it in https://jwt.io/

And this is the result of implementing of OAUTH2

![image](https://github.com/ArishMada/authentic/assets/91464375/6132493f-1131-439e-a40e-7d7b0b054af7)

-THE SQL Structure

![image](https://github.com/ArishMada/authentic/assets/91464375/bbdb56fd-2c2c-4717-9e0d-194f910ece6a)

-THE VALUE 

![image](https://github.com/ArishMada/authentic/assets/91464375/060499f1-05d7-43cc-8d39-36a36b06570b)

Like i said even the developer cant see the user password because it is hashed no CAP.

-Secret Key

SECRET_KEY = secrets.token_hex(32)

We implement library secrets for the secret key so it is also secret even for us. It is a must have for privacy&policy purposes, for me i don't really understand why.

**FrontEndThings**

-Login

![image](https://github.com/ArishMada/authentic/assets/91464375/8bcb0015-baa3-4c11-b3ff-37a1ce8895d0)

-After Login

-Login No Account (error catch)

![image](https://github.com/ArishMada/authentic/assets/91464375/7fb9a8e6-194f-4e01-ba7c-0c9b4dcd6162)


![image](https://github.com/ArishMada/authentic/assets/91464375/2417577b-0e63-43e5-99be-877fae1b854f)

-Signup

![image](https://github.com/ArishMada/authentic/assets/91464375/0296710d-6773-4a5e-bc16-c73c8ce0e1b6)

-After Signuo

![image](https://github.com/ArishMada/authentic/assets/91464375/2d3c8b51-ba21-4aee-9589-90cbc3115df4)

-Signup Double (error catch)

![image](https://github.com/ArishMada/authentic/assets/91464375/adbe579d-a591-4922-80b9-05293c74e69d)


