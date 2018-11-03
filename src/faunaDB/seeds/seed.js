import createDestinations from './createDestinations';
import createTrips from './createTrips';

export default function seed(client) {
  createDestinations(client);
  createTrips(client);
}