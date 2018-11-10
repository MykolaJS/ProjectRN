import { server } from "../constants";
import fetchURL from "../helpers/fetch"; 

export default class UserApi {

  static getPosts(args) {
    const request = new Request(`${server}/api/pages`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": args.token
      },
    });

    return fetchURL(request)
  }

  static postCreate(args) {

    const request = new Request(`${server}/api/pages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": args.token
      },
      body: JSON.stringify({
        "title": args.title,
        "body": args.body,
        "url": args.url
      })
    });

    return fetchURL(request)
  }

}
