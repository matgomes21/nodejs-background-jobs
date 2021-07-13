# Queue jobs

Queue application made for running background jobs in parallel.

## Technologies
* NodeJs
* Bull
* Redis

## How to run
* Install dependencies (yarn or npm)
``` bash
yarn install
```
* Create a ```.env``` file following ```.env.example``` structure

* Run redis
``` bash
docker run --name redis -p 6379:6379 -d -t redis:alpine
```
* Run server with ```dev``` script
``` bash
yarn dev
```
