import { server } from "../constants";
import fetchURL from "../helpers/fetch"; 

export default class UserApi {

  static singUp(args) {
    const request = new Request(`${server}/api/singup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": args.email,
        "password": args.password,
        "name": args.name
      })
    });

    return fetchURL(request)
  }

  static singIn(args) {
    const request = new Request(`${server}/api/singin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": args.email,
        "password": args.password,
      })
    });
    
    return fetchURL(request)
  }

  static getCurrentUser(args) {
    const request = new Request(`${server}/api/current-user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": args.token
      },
    });

    return fetchURL(request)
  }

}