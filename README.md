# -Authentication-with-passport.js

## 1. AUTHORS

Instigate mobile
Vahan and Armine
Emails: info@instigatemobile.com
        vahan_k@instigatemobile.com
        armine_ha@instigatemobile.com


## 2. REQUIREMENTS

- npm: v5.x.x
- Node: v6.x.x
- mongo: v3.x.x


## 3. INSTALLATION

***Ubuntu 16.04 LTS***

* Node

```sh
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ npm install npm@5.5.1
```

* Mongo

```sh
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
$ sudo apt update
$ sudo apt install -y mongodb-org
$ sudo systemctl start mongod
```

## 5. RUN

```sh
    $ cd $PROJECT_DIR
    $ node app.js
```
