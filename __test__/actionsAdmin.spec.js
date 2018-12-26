import {
 makeAdmin,
 blockUser,
 setUsers,
 getUsers,
} from "../src/admin/actions";

describe("action creators", () => {
	it("ACTION - make admin", () => {
		expect(makeAdmin(1)).toEqual({
			type: "MAKE_ADMIN",
			userId: 1 
			
		});
	});

	it("ACTION - block user", () => {
		expect(blockUser(1)).toEqual({
			type: "BLOCK_USER",
			userId: 1
		});
	});

	it("ACTION - get users", () => {
		expect(getUsers()).toEqual({
			type: "GET_USERS",
		});
	});

	it("ACTION - get users", () => {
		expect(setUsers({})).toEqual({
			type: "SET_USERS",
			data: {}
		});
	});

	
})
