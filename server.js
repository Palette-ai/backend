import apollo from 'apollo-server'
// import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './data/connectDB.js';
import resolvers from './graphql/resolvers/index.js'
import typeDefs from './graphql/TypeDefs.js'

const { ApolloServer } = apollo

const corsOptions = process.env.NODE_ENV === 'production' ? {
	origin: "LINK_TO_DEPLOYED_FRONTEND",
	credentials: true
} :
	{
		origin: "http://localhost:3000",
		credentials: true
	}

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req })
})

await connectDB(server)


