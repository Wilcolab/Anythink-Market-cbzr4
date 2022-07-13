# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

### Windows

---
Prerequisites

- Git for windows
- The Windows subsystem for linux and a linux distribution of your choice
- docker for Windows
- the editor of your choice

---

1. clone the repository with ```git clone <repo address>.git```

2. verify docker is running

3. start the container with ```docker-compose up``` in the repository root directory

4. verify the containers are running:

    1. verify the backend is up by going to <http://localhost:3000/api/ping>

    2. If everything is working properly, you’ll be able to create a new user on <http://localhost:3001/register>
