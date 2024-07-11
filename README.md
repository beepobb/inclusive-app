# Inclusive App

## Setup

Run your backend services first.

It is assumed here that:
- the docker version of mysql will be used
- bash, git bash or wsl is being used

```bash
inclusive-app $
inclusive-app $ cd backend
inclusive-app/backend $ npm install
inclusive-app/backend $ chmod 755 ./run_mysql.sh
inclusive-app/backend $ ./run_mysql.sh start # run mysql docker
inclusive-app/backend $ npm run start
```

You can then run your frontend.

```bash
inclusive-app $
inclusive-app $ cd frontend
inclusive-app/frontend $ npm install
inclusive-app/frontend $ npm run start
```
