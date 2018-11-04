import React from 'react';
import { Link } from 'gatsby';

import Trip from './trip';

const Trips = (props) => {
  const trips = props.trips.map((trip) =>
    <li key={trip.id} style={{ borderBottom: '1px solid black'}}>
      <Link to={'/' + trip.id} style={{ textDecoration: 'none' }}>
        <Trip price={trip.price} image={trip.image} title={trip.title} rate={trip.rate} start={trip.start} dest={trip.dest}/>
      </Link>
    </li>
  );
  return (
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, paddingLeft: '1rem'}}>{trips}</ul>
  );
};

export default Trips;
