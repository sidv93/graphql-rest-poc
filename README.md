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

## To do
The GraphQL server should be in a docker container. This service was developer using `apollo-server` package. This package does not give us the ability to deploy in a specific url. **[See comment](https://github.com/apollographql/apollo-server/issues/1617#issuecomment-419753087)**. We would have to use `apollo-server-express` package for this. 
