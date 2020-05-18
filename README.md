# graphql-rest-poc
A graphql endpoint aggregating multiple REST microservices
## Steps to run
* Make sure you have docker, docker-compose and NodeJS installed
* Go to `traefik` directory and run
```
	sudo docker-compose up
```
* Come back and navigate to the `apps` directory and run
```
	sudo docker-compose build
        sudo docker-compose up
```
* Now Traefik and the REST services should be up
* To start the GraphQL service, go to `apps/graphql` and run
```
	npm run start
```
* You can view the GraphQL playground at **http://localhost:4000/**
