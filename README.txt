npm install --save express
npm install --save mongoose
npm install --save body-parser
npm install --save bcryptjs
npm install --save jsonwebtoken
npm install --save bson-objectid 

-- Create a new db in mongolab with new user .
URL :  mongodb://<dbuser>:<dbpassword>@ds063536.mlab.com:63536/workout
change the path variable  sysdm.cpl 

locally create mongodb:

> use workouts
switched to db workouts
> db.createUser({user:"test", pwd:"test", roles:["readWrite", "dbAdmin"]});
Successfully added user: { "user" : "test", "roles" : [ "readWrite", "dbAdmin" ] }


To start the app :

node server.js 

How to test the /api/definitions

1. add a new user
Sample:

user:

{
  "user": {
		"username": "testuser",
		"email": "testuser@gmail.com",
	}
}

result could be a "sessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYnNvbnR5cGUiOiJPYmplY3RJRCIsImlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbODgsMTExLDE5MSw4NCwxMDAsMTc1LDk4LDEzMiwxNDQsNCwyOCwyMDVdfSwiaWF0IjoxNDgzNzE4NDg0LCJleHAiOjE0ODM4MDQ4ODR9.DQpx-VShWkm5miD7dkgGNnjCgHeIubrJp2rnEJiInEI"

2. GET api/definitions : prepare the request take the sessionToken. Headers for the request

authentication : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYnNvbnR5cGUiOiJPYmplY3RJRCIsImlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbODgsMTExLDE5MSw4NCwxMDAsMTc1LDk4LDEzMiwxNDQsNCwyOCwyMDVdfSwiaWF0IjoxNDgzNzE4NDg0LCJleHAiOjE0ODM4MDQ4ODR9.DQpx-VShWkm5miD7dkgGNnjCgHeIubrJp2rnEJiInEI


