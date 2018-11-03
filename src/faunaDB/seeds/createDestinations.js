import { query as q } from "faunadb"

export default async function createDestinations(client) {
  await client
    .query(q.Get(q.Database("Events")))
    .then(() => q.CreateClass({ name: "testuser" }))
    .then((ret) => console.log(ret))
}