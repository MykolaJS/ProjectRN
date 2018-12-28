import {
 requestSignUp,
 requestSignUpSucceeded,
 requestSignUpError,
 singUp,
 requestSignIn,
 requestSignInSucceeded,
 requestSignInError,
 singIn,
 singInFacebook
} from "../src/user/actions";

describe("action creators", () => {
	it("sing up", () => {
		expect(requestSignUp()).toEqual({
			type: "REQUEST_SIGN_UP"
		});
	});

	it("request sign up succeeded", () => {
		const data = {};
		expect(requestSignUpSucceeded(data)).toEqual({
			type: "REQUEST_SIGN_UP_SUCCEEDED",
			data
		});
	});

	it("request sing up failed ", () => {
		const error = "";
		expect(requestSignUpError(error)).toEqual({
			type: "REQUEST_SIGN_UP_FAILED",
			error
		})
	});

	it("sign un", () => {
		const data = {
			name: "Mykola",
			email:"sdfa",
			password: "asdf"
		};
		expect(singUp(data)).toEqual({
			type: "SING_UP",
			...data 
		});
	});

	it("request sign in", () => {
		expect(requestSignIn()).toEqual({
			type: "REQUEST_SIGN_IN"
		});
	});

	it("request sign in succeeded", () => {
		const data = {}, token = ""

		expect(requestSignInSucceeded(data ,token)).toEqual({
			type: "REQUEST_SIGN_IN_SUCCEEDED",
			data,
			token
		});
	});

	it("request sign in", () => {
		expect(requestSignIn()).toEqual({
			type: "REQUEST_SIGN_IN"
		});
	});

	it("request sign in succeeded", () => {
		const data = {
			email: "",
  			password: ""
		};
		const redirect = () => null;

		expect(singIn(data, redirect)).toEqual({
			type: "SING_IN",
			email: data.email,
  			password: data.password,
			redirect: redirect
			
		});
	});

	it("sign in facebook ", () => {
		const data = {
			name: "dfs",
  			socialId: "1212",
  			image: "sdf"
		};
		const redirect = () => null;

		expect(singInFacebook(data, redirect)).toEqual({
			type: "SING_IN_FACEBOOK",
			name: data.name,
  			socialId: data.socialId,
  			image: data.image,
			redirect: redirect
		});
	});

	it("request sign in", () => {
		const error = "error";
		expect(requestSignInError(error)).toEqual({
			type: "REQUEST_SIGN_IN_FAILED",
			error
		});
	});
})
