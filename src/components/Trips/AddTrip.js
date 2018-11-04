import Popup from 'reactjs-popup';
import React, { Component } from 'react';
import { Link } from 'gatsby'

import fire from '../fire';
import SearchBox from '../searchbox';

import './addTrip.css';

class AddTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: '',
      dest: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state.start);
    console.log(this.state.dest);

    fire.database().ref('Trip/').push({
          start: {
            name: this.state.start.name,
            lat: this.state.start.geometry.location.lat(),
            lng: this.state.start.geometry.location.lng()
          },
          dest: {
            name: this.state.dest.name,
            lat: this.state.dest.geometry.location.lat(),
            lng: this.state.dest.geometry.location.lng()
          }
      }).then((data)=>{
          //success callback
          console.log('data ' , data)
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
      })
  }

  handleSearchChange(fieldId, location) {
    console.log(location.geometry.location.lat());
    this.setState({
      [fieldId]: location
    });
  }


  render() {
    return (
      <Popup trigger={<button className='button' style={{ marginLeft: '1rem'}}> Create New Trip </button>} modal>
        {close => (
          <div className='modal'>
            <div className='header'>
              Create New Trip
              <button className='close' onClick={close} href=''>
                &times;
              </button>
            </div>
            <div className='content'>
              <form onSubmit={this.handleSubmit}>
                <SearchBox
                  key="start"
                  id="start"
                  prompt="Where did you start?"
                  onPlacesChanged={this.handleSearchChange} />
                <SearchBox
                  key="dest"
                  id="dest"
                  prompt="Where did you end?"
                  onPlacesChanged={this.handleSearchChange} />
                <button type='submit'>Create</button>
              </form>
            </div>
          </div>

        )}
      </Popup>
    );
  }
}

export default AddTrip;
