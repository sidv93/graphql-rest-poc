import { ApolloServer } from 'apollo-server';
import { stitchSchemas } from '@graphql-tools/stitch';

import { fetch } from 'cross-fetch';
import { print } from 'graphql';
import { introspectSchema } from '@graphql-tools/wrap';

const run = async () => {
    const executor1 = async ({ document, variables }) => {
        const query = print(document);
        const fetchResult = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables })
        });
        return fetchResult.json();
    };

    const remoteSchema1 = await introspectSchema(executor1);

    const executor2 = async ({ document, variables }) => {
        const query = print(document);
        const fetchResult = await fetch('http://localhost:2000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables })
        });
        return fetchResult.json();
    };

    const remoteSchema2 = await introspectSchema(executor2);

    const schema = stitchSchemas({
        subschemas: [
            { schema: remoteSchema1, executor: executor1 },
            { schema: remoteSchema2, executor: executor2 }
        ],
    });
    const server = new ApolloServer({
        schema
    });
    server.listen().then(({ url }) => {
        console.log(`🚀  GraphQL server is ready at ${url}`);
    });
}

run();


