# Laravel-Vue SPA

## Technologies

Language: PHP Version 7.3.20

DB: MySQL 5.7.32

Frameworks: 
- [Laravel 8.x](https://laravel.com/docs/8.x)  
- [Vue 2.x](https://es.vuejs.org/v2/guide/index.html)


## Local environment

### Dependencies

For local development we have a virtualized stack in Docker (Apache 2.4.38, PHP 7.3.20, MySQL 5.7.32).

- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/install/)

Frontend Dev Dependencies: [Node.js](https://nodejs.org/en/download/) and NPM  

### Before starting

Clone the repository:


```
$ git clone git@github.com:porloscerros/laravel-vue-spa.git
$ cd laravel-vue-spa/src
```


### Start Docker

```
$ docker-compose up
```

That remains listening on:

```
http://localhost:8080
```


### Configuration

#### Back-end

Open another terminal and follow the following steps.

Assign permissions to directories and files for the apache user:

```
sudo chown $USER:http ./public -R
sudo chown $USER:http ./storage -R
sudo chown $USER:http ./bootstrap/cache -R

find ./public -type d -exec chmod 755 {} \;
find ./public -type f -exec chmod 644 {} \;

find ./storage -type d -exec chmod 775 {} \;
find ./storage -type f -exec chmod 664 {} \;

find ./bootstrap/cache -type d -exec chmod 775 {} \;
```


Access the shell in the container `php-apache`:

```
$ docker-compose exec --user 1000 php-apache /bin/bash
```


Install the packages required by Laravel through the composer:

```
$ composer install
``` 

A file that is not versioned is needed to get Laravel up.

To generate it, take by reference `.env.example`

```
$ cp .env.example .env
```

Generate hash for the web application `APP_KEY=` with the following command:


```
$ php artisan key:generate
```
  

Run migrations and seeds:
```
$ php artisan migrate --seed
```

That will create the tables in the Database and insert the users to login to the application.

Exit php container:
```
$ exit
```


#### Front-end

Install (dev) Javascript dependencies:

```
$ npm install
``` 

Compile Js:  

```
$ npm run dev
``` 

### Access

You can now access the application via [http://localhost:8080](http://localhost:8080) on your browser.

### Utils

#### phpMyAdmin
We have a container with phpMyAdmin running on:

[http://localhost:8081](http://localhost:8081)

    - *server*: laravel-vue-spa-mysql
    - *user*: root
    - *pass*: admin
    

#### Logs 
Laravel generates its own log file in `storage/logs/laravel.log`

To see it in real time through the console, open another terminal and run:  


```
$ tail -f storage/logs/laravel.log
```


## Unversioned files
- `src/.env`

Those generated by _laravel-mix_ for the front-end (see on the wiki: [deploy]()):

- `public/mix-manifest.json`
- `public/css/*`
- `public/js/*`
- `public/img/*`

## Troubleshooting


## Wiki  

More info in the [wiki]().