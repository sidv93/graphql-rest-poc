import { ApolloServer } from 'apollo-server';
import { stitchSchemas } from '@graphql-tools/stitch';

import { fetch } from 'cross-fetch';
import { print } from 'graphql';
import { introspectSchema } from '@graphql-tools/wrap';
import { delegateToSchema } from '@graphql-tools/delegate';
import { wrapSchema } from '@graphql-tools/wrap';

const schemaUrls = [
    {
        name: 'flight',
        url: 'http://localhost:3000/graphql'
    },
    {
        name: 'user',
        url: 'http://localhost:2000/graphql'
    }
];

const run = async () => {
    const makeExecutor = async (url) => {
        const executor = async ({ document, variables }) => {
            const query = print(document);
            const fetchResult = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query, variables })
            });
            return fetchResult.json();
        };
        return executor;
    }

    const makeSchema = async (executor) => {
        const schema  = wrapSchema({
            schema: await introspectSchema(executor),
            executor
        })
        return schema;
    }

    const flightSchemaExecutor = await makeExecutor(schemaUrls[1].url);
    const flightSchema = await makeSchema(flightSchemaExecutor);

    const userSchemaExecutor = await makeExecutor(schemaUrls[0].url);
    const userSchema = await makeSchema(userSchemaExecutor);

    const linkTypeDefs = `
        extend type Flight {
            passengers: [User]
        }
    `;
    const schema = stitchSchemas({
        subschemas: [
            {
                schema: flightSchema,
                executor: flightSchemaExecutor
            },
            {
                schema: userSchema,
                executor: userSchemaExecutor
            }
        ],
        typeDefs: linkTypeDefs,
        resolvers: {
            Flight: {
                passengers: {
                    fragment: `... on Flight { id }`,
                    resolve(flight, args, context, info) {
                        return delegateToSchema({
                            schema: userSchema,
                            operation: 'query',
                            fieldName: 'usersByFlight',
                            args: {
                                flightId: flight.id
                            },
                            context,
                            info,
                        });
                    },
                },
            },
        }
    });
    const server = new ApolloServer({
        schema
    });
    server.listen().then(({ url }) => {
        console.log(`🚀  GraphQL server is ready at ${url}`);
    });
}

run();


