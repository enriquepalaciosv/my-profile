# My profile (resume or CV)
This started as a final project for the basic Vue.js course at NicaSource to demonstrate the knowledge acquired during the course, then I thought it'll be good to use it as personal presentational profile.

It was built with Vue.js + Vue Router + Vuex (frontend) and Node.js + Mongoose (backend).

 ## Quick start
 1. Install dependencies `npm install` within the root directory.
 2. Set your MongoDB URI in a **.env** file within the root directory `cp Example.env .env`
 3. Run the server with `npm start` within the root directory.
 4. Run the app with `npm run serve` within the */app* directory
 5. Visit http://localhost:8080


### Project setup

Set your environment variable for the mongodb connection

```
MONGOLAB_URI=mongodb://username:password@somedns.mlab.com:port/dbname
```

By default the web app will run on port 8080 and the API on port 3000 but you can customize that by setting these environment variables

```
PORT
```

```
VUE_APP_PROFILES_API_BASE_URL
```


### API reference

You're able to call the following endpoints:

| HTTP request | Description |
|:-- |:-- |
| **GET** /api/profiles          | Fetch all registries |
| **GET** /api/profiles/*:id*    | Find one registry by ID |
| **POST** /api/profiles         | Create a new one as the `/models` structure or `test.json` file |
| **PUT** /api/profiles/*:id*    | Update one, make sure to inclue ID in the path |
| **DELETE** /api/profiles/*:id* | Delete a registry permanently |
___
<br>
