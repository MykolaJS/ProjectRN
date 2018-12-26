export const getUsers = () => ({
	type: "GET_USERS"
});

export const setUsers = data => ({
	type: "SET_USERS",
	data
})

export const blockUser = userId => ({
	type: "BLOCK_USER",
	userId
})

export const makeAdmin = userId => ({
	type: "MAKE_ADMIN",
	userId
})
