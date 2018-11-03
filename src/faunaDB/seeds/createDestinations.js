import { query as q } from "faunadb"

export default function createDestinations(client) {
  client
    .query(q.Get(q.Database("Events")))
    .then((ret) => console.log(ret))
}