# backend

## service setup

```bash
# using git bash or wsl
./backend $ npm install
./backend $ npm run start
```

## docker database setup

Script to initialize tables are in `mysql/init_template.sql`

Install docker here for Windows: https://docs.docker.com/desktop/install/windows-install/ 

Install docker here for Mac: https://docs.docker.com/desktop/install/mac-install/ 

Open the docker application.

Run the following commands on bash/wsl:
```bash
# using git bash or wsl
./backend $ chmod 755 run_mysql.sh
./backend $ ./run_mysql.sh start # starts mysql pod
./backend $ ./run_mysql.sh stop # stops mysql pod
```

You can use the Docker UI to check the containers that are running.
