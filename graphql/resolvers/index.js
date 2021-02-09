import { usersResolver } from './users.js'

export default {
	Mutation: {
		...usersResolver.Mutation
	}
}