import Popup from 'reactjs-popup';
import React, { Component } from 'react';
import { Link } from 'gatsby'

import fire from '../fire';
import SearchBox from '../searchbox';

import './addEvent.css';


class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: '',
      dest: '',
      time: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleChange(e) {
  //  this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state.start.name)
    console.log(e.target.dest.value)

    fire.database().ref('Trip/Events').push({
          start: {
            name: this.state.start.name,
            lat: this.state.start.geometry.location.lat(),
            lng: this.state.start.geometry.location.lng()
          },
          name: e.target.dest.value,
          time: e.target.time.value
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
      <Popup trigger={<button className='button' style={{ marginLeft: '1rem'}}> Create New Event </button>} modal>
        {close => (
          <div className='modal'>
            <div className='header'>
              Create New Event
              <button className='close' onClick={close} href=''>
                &times;
              </button>
            </div>
            <div className='content'>
              <form onSubmit={this.handleSubmit}>
                <SearchBox
                  key="start"
                  id="start"
                  prompt="Where do you go?"
                  onPlacesChanged={this.handleSearchChange} />

                <label>
                  <input type='text' name='dest' value={this.state.value} onChange={this.handleChange} placeholder={'Name of event?'} required/>
                </label>

                <label>
                  <input type='text' name='time' value={this.state.value} onChange={this.handleChange} placeholder={'When will you go?'} required/>
                </label>
                <button type='submit'>Create</button>
              </form>
            </div>
          </div>

        )}
      </Popup>
    );
  }
}

export default Event;
