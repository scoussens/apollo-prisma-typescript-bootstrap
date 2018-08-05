import { ApolloServer, gql } from 'apollo-server';
import { importSchema } from 'graphql-import';
import { CONFIG } from './config';
import { Prisma } from './generated/prisma';
import { Resolvers } from './resolvers';

const importedTypeDefs = importSchema('./src/schema.graphql');

const db = new Prisma({
    debug: true,
    endpoint: CONFIG.PRISMA_URL
});

const server = new ApolloServer({
    typeDefs: gql`${importedTypeDefs}`,
    resolvers: Resolvers,
    context: (req: any) => ({ ...req, db })
})

server.listen(CONFIG.PORT)
    .then(({ url }) => console.log(`Server is running on ${url} and connecting to Prisma @ ${CONFIG.PRISMA_URL}`))
    .catch(err => console.log(err));