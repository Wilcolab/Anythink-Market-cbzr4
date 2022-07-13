# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

### Windows

1. Install windows subsystem for linux

2. Install docker desktop

3. clone the repository
   with ```git clone <repo address>.git```

4. verify docker is running

5. start the container with ```docker-compose up``` in the repository root directory

6. verify the containers are running:

    A. verify the backend is up by going to <http://localhost:3000/api/ping>

    B. If everything is working properly, you’ll be able to create a new user on <http://localhost:3001/register>
