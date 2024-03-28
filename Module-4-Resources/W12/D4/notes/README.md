<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 12` `W12D4`

---

# Week 12 Day 4:

Scopes and JSON Web Tokens

---

# Scopes

Scopes are additional attributes that we can add to our model definition.

They allow us to dry up our code by pre-defining commonly used queries. This makes it easier for us to include or exclude specific information.

---

## There are a couple of ways to add scopes to our models.

The first is a default scope. This will _always_ be applied to any query on the model.

We can define a default scope by adding a `defaultScope` key to the options object in our model. This will be the last object in our `Model.init` method.

---

## Default scope to model

In last object in init:

```javascript
{ // options object in User.init
    sequelize,
    modelName: "User",
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }
}
```

---

## Scopes Property

We can add non-default scopes by using the `scopes` property.

The `scopes` property points to an object who's key is the name of the scope, and the value is the object to be passed to the query

```javascript
{ // options object in User.init
    sequelize,
    modelName: "User",
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    },
    scopes: {
        onlyUserNameAndId: {
            attributes: ['id', 'username']
        }
    }
}
```

---

## When applying a non-default scope, we have to adjust our query

We have to add .scope() to our query like so:

```javascript
<model>.scope(<scopes>).<query method>()
```

If we add a named scope to a query, then the defaultScope will not be applied automatically

We would need to specify it in the .scopes()

---

## We can also add a function scope

```javascript
{ // options object in User.init
    scopes: {
        includePostBy(postId) {
            const { Post } = require('../models')

            return {
                include: {
                    model: Post,
                    where: {
                        id: postId
                    }
                }
            }
        }
    }
}
```

Function scopes get passed in as another object with the key of method and a value of an array: `[<func scope name>, <args>]`
Function scopes return a filter to be applied to the query

---

# 30 mins for Scopes SP

---

# JWT - JSON Web Token

\*\* Add a jwt_code.js file to your demo_code directory

This is how we handle User Auth

- If we want to log a user in, we create a token.
- If we want to log a user out, we delete that token

---

### Some ways that we keep data safe as we transport it across the web:

- Encode
- Encrypt
- Hash

---

# Encode

Not very secure. Can easily be decoded.

`http://localhost:5000/users?name=Bloo%20Q.%20Kazoo`

Here we are using the "%20" URL encoding to make the string "Bloo Q. Kazoo" interpretable to the browser despite having spaces.

---

# Encrypt

More secure. Once data is encrypted, it can't be descrypted unless they have the password/secret key
If a bad user gets that secret key, we are in trouble

---

# Hash

- Cannot be reverse-engineered
- Hashing is deterministic
- There is a problem here:
  - There is a possibility that multiple strings could end up hashing to the same value
  - This is called a hash collision

---

# Rainbow Tables

- These are tables of exposed emails/usernames as well as common passwords with their hashed version
- Malicious users will use these Rainbow Tables to brute force logins
- We can use something called a Salt to avoid this hash collision issue

---

# JWTs

Consists of 3 parts:

- Header
- Payload
- Signature

---

# Header

- Contains the type of token
- Indicator for the algo that we use for the hash
- JWT will automatically set this

---

# Payload

- The data we are transmitting
- Can add claims - such as an expiration
- ONLY encoded

---

# Signature

- Hash of the header, payload, and a secret key
- Allows us to validate that our token hasn't been tampered with

---

### To create a Token:

```javascript
// Must require jswonwebtoken
require('jsonwebtoken')

const createToken = () => {
    const token = jwt.sign(<payload>, <secretKey>)
    return token;
};

const verifyToken = (token) => {
    const verified = jwt.verify(<token>, <secretKey>)
    // jwt.verify also can take in a 3rd arg, which is a callback function
    return verified
};
```

---

# 20 mins for JWT SP

---

# Bcrypt

\*\* Create a new bcrypt.js file and npm install bcryptjs

The bcrypt function allows us to increase the security of our hash by passing in a cost argument.

```javascript
const bcrypt = require("bcryptjs");
const hashPass = (password) => {
  const hash = bcrypt.hashSync(password, 12);
  return hash;
};
```

The hash provided consists of algo, cost, salt (22 char), and hash

```bash
// $2a$12$2q9fQ2so8M67u7IAoR8zZe0XtqG0oXkDm53RzjuA6vb0OwH3nm1tC
//  \_/\_/\____________________/\_____________________________/
//  /   |         |                           |
//algo cost     salt                        hash
```

---

# Cost Factor

The cost factor tells `bcrypt` how many times to hash the password
\*\* Graph to demo cost in `bcrypt` about halfway down this link
<a href='https://stytch.com/blog/what-is-password-hashing/#:~:text=The%20default%20cost%20(rounds)%20of%20bcrypt%20is%2010.%20When%20this%20algorithm%20was%20conceived%2C%20the%20cost%20of%2010%20was%20secure%20enough.%20However%2C%20depending%20on%20the%20hardware%2C%20this%20now%20can%20take%20milliseconds.%20So%2C%20you%20can%20increase%20the%20cost%20of%20rounds%20to%2015%20or%20more%20to%20make%20the%20hashing%20process%20take%20several%20seconds%20instead.%C2%A0%C2%A0'>Hashing Article</a>

---

## Note

We don't want to set the cost too high
Setting the cost factor to around 12-13 is the recommendation
\*\* demo how long the hashing takes with a cost of 12, 14, 16, 18.

---

## Comparing Hashes

We can easily compare our stored hash to an incoming hash using `bcrypt.compareSync`;

```javascript
const testPass = (password, hash) => {
  const isPass = bcrypt.compareSync(password, hash);
  return isPass;
};
```

---

\*\* Demo the full workflow of a user signing up (initial hashing), then us verifying that password.

---

Break out for Auth Me Phases 3-5

---

# Instructor

\*\* Post in Discord: - You can create your own Google form to gather this info

@here Howdy folks. When you have a quick moment, we need to know which of the two projects you'll be pursuing, and we need your git repo links. Please submit this Google form: `<add form url>`
If you're on the fence about which project to pursue, AirBnB tends to be a little easier, but it's also one of the most commonly cloned websites on the internet at this point. Meetup will be a bit harder, there are a few more endpoints to complete and it requires a solid understanding of our user auth flow.
