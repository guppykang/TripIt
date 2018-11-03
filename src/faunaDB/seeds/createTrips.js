import { query as q } from "faunadb"

export default async function createTrips(client) {
  await client
    .query(q.Get(q.Database("Trips")))
    .then(() => q.CreateClass({ name: "testuser" }))
    .then((ret) => console.log(ret))
}