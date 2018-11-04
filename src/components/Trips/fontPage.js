import React, { Component } from 'react';

import Trips from './trips';
import AddTrip from './addTrip';

import github from '../../images/github.jpg';

class FontPage extends Component {
  constructor() {
    super();
    this.state = {
      trips: [
        {
          id: 1,
          title: 'one day in github',
          price: '10',
          image: github,
          rate: 2,
          start: 'Mountain View',
          dest: 'Github'
        },
        {
          id: 2,
          title: 'one day in github',
          price: '20',
          image: github,
          rate: 3,
          start: 'Mountain View',
          dest: 'Github'
        },
        {
          id: 3,
          title: 'one day in github',
          price: '30',
          image: github,
          rate: 4,
          start: 'Mountain View',
          dest: 'Github'
        }
      ]
    };
  }

  render() {
    return (
      <div style={{ top: '30%', width: '80%', marginLeft: '10%' }}>
        <Trips trips={this.state.trips} />
        <AddTrip />
      </div>
    );
  }
}

export default FontPage;
