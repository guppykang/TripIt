import React from 'react';
import { Link } from 'gatsby';

const Trip = (props) => {
  let priceDisplay = '$';
  if (props.price > 10) {
    priceDisplay += '$';
  }
  if (props.price > 20) {
    priceDisplay += '$';
  }
  return (
    <Link to="/viewTrip/map/" style={{ color: 'black', paddingLeft: '1rem', paddingRight: '1rem'}}>
      <div>
        <span>{props.title}</span>
        <span style={{ marginRight: '0.2rem', marginLeft: '0.2rem' }}>|</span>
        <small>From {props.start} to {props.dest}</small>
      </div>
      <div style={{ marginBottom: '1rem'}}>
        <span>{priceDisplay}</span>
        <span style={{ marginRight: '0.2rem', marginLeft: '0.2rem' }}>|</span>
        <span>Rate: {props.rate}</span>
      </div>
      <div>
        <img src={props.image} alt={props.title} style={{ width: '12rem', height: '9rem' }} />
      </div>
    </Link>
  );
};

export default Trip;
