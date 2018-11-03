import createDestinations from './createDestinations';
import createTrips from './createTrips';

export default async function seed(client) {
  await createDestinations(client);
  await createTrips(client);
}