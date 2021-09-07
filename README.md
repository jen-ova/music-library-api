
  <h3 align="center">Backend Project:  Music Library</h3>

  <p align="center">
    A project to design and implement a music library API which can perform CRUD operations on a database, using SQL, database and express.js.
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#configure-the-app">Configure the App</a></li>
        <li><a href="#start-the-app">Start the App</a></li>
      </ul>
    </li>
    <li><a href="#api-endpoints">API Endpoints</a>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Concepts include database design, SQL, MySQL and CRUD operations. This allows the user to use JSON POST, GET, PATCH and DELETE requests to create, read, update and delete artists from a music library database.

### Built With

* [NPM](https://docs.npmjs.com/getting-started)
* [Node.js](https://nodejs.org/en/download/)
* [MySQL](https://www.mysql.com/)
* [Docker](https://www.docker.com/)
* [JavaScript](https://www.javascript.com/)
* [Chai.js](https://www.chaijs.com/)



<!-- GETTING STARTED -->
## Getting Started

Pull this repo and install NPM

```sh
  $ git clone https://github.com/jen-ova/music-library-api.git
  $ cd music-library
  $ npm install
  ```

### Configure the app

Add the following into `.env` and `.env.test` files in the root folder of the project:

  ```sh
  DB_PASSWORD=password
  DB_NAME=music_library 
  DB_USER=root
  DB_HOST=localhost
  DB_PORT=3307
  PORT=3000
  ```

### Start the app

  ```sh
  npm start
  ```

# API Endpoints

| URI                                         | Request Method | CRUD     | What does it do?                                                                               |
| ------------------------------------------- | -------------- | -------- | ---------------------------------------------------------------------------------------------- |
| [/artist](#list-all-artists)                | `GET`          | `READ`   | Generate a list of all artists in the database's `Artists` table.                              |
| [/artist](#create-new-artist)               | `POST`         | `CREATE` | Adds an artist to the table in the database.                                                   |
| [/artist/\*](#get-artist-by-id)             | `GET`          | `READ`   | Fetches the artist from the database's `Artists` table where \* is the artist ID (an integer). |
| [/artist/\*](#update-existing-artist-by-id) | `PATCH`        | `UPDATE` | Updates the artist table where \* is the artist ID (an integer).                               |
| [/artist/\*](#delete-artist-by-id)          | `DELETE`       | `DELETE` | Deletes the artist where \* is the artist ID (an integer).                                     |



### List All Artists

`GET` `/artist`

#### Response Body

```json
[
  {
    "id": 1,
    "name": "Periphery",
    "genre": "djent"
  },
  {
    "id": 2,
    "name": "Carpenter Brut",
    "genre": "synthwave"
  },
  {
    "id": 3,
    "name": "Meshuggah",
    "genre": "prog metal"
  }
]
```


### List Artist by ID

`GET` `/artist/{ artist id }`

#### Response Body

```json
[
  {
    "id": 1,
    "name": "Periphery",
    "genre": "djent"
  }
]
```


### Post a new artist

`POST` `/artist`

#### Request Body

```json
[
  {
    "name": "Architects",
    "genre": "metalcore"
  }
]
```


### Update an existing Artist by ID

`PATCH` `/artist/{ artist id }`

#### Request Body

```json
{
  "genre": "prog metal"
}
```


### Delete Artist by ID

`DELETE` `/artist/{ artist id }`
