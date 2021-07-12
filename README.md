# Queue jobs

Queue application for background jobs running in parallel.

## Technologies
* NodeJs
* Bull
* Redis

## How to run
* Install dependencies (yarn or npm)
``` bash
yarn install
```
* Run redis
``` bash
docker run --name redis -p 6379:6379 -d -t redis:alpine
```
* Run server with ```dev``` script
``` bash
yarn dev
```
