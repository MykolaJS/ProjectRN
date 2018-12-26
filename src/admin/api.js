import { server } from "../constants";
import fetchURL from "../helpers/fetch"; 

export default class AdminApi {

  static getAllUsers(args) {
    const request = new Request(`${server}/api/all-users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": args.token
      },
    });

    return fetchURL(request)
  }

  static makeAdmin(args) {
    const request = new Request(`${server}/api/make-admin/${args.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": args.token
      },
      body: JSON.stringify({
        "userId": args.userId
      })
    });
    return fetchURL(request)
  }

  static blockUser(args) {
    const request = new Request(`${server}/api/block-user/${args.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": args.token
      },
       body: JSON.stringify({
        "userId": args.userId
      })
    });

    return fetchURL(request)
  }
}