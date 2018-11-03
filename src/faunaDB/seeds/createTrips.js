import { query as q } from "faunadb"

export default function createTrips(client) {
  client
    .query(q.Get(q.Database("Trips")))
    .then((ret) => console.log(ret))
}