import { server } from "../constants";

export default class UserApi {

  static singUp(args) {
    const request = new Request(`${server}/api/singup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "login": args.login,
        "password": args.password,
      })
    });

    return fetch(request).then(response => {
      const { status } = response;
      if (status === 200 || status === 201) return response.json();
        return response.json().then(resp => {
        const error = resp.message;
        throw new Error(error)
      })
    })
  }
}