import * as admin from 'firebase-admin'
import bcrypt from 'bcryptjs'

const usersResolver = {
	Mutation: {
		createUser: (_, { email, username, password }) => {
			return admin.default
				.auth()
				.createUser({
					email,
					password,
					displayName: username,
					// photoURL: 'http://www.example.com/12345678/photo.png',
					// disabled: false,
				})
				.then(userRecord => {
					console.log('Successfully created new user:', userRecord.uid)
					return { email, username, id: userRecord.uid }
				})
				.catch(error => {
					return error
				});
		}
	}
}

export { usersResolver }