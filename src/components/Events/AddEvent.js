import Popup from 'reactjs-popup';
import React, { Component } from 'react';
import { Link } from 'gatsby'

import fire from '../fire';
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
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(e.target.start.value)
    console.log(e.target.dest.value)

    fire.database().ref('Trip/Events').push({
          start: e.target.start.value,
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
                <label>
                  <input type='text' name='dest' value={this.state.value} onChange={this.handleChange} placeholder={'Location of event?'} required/>
                </label>

                <label>
                  <input type='text' name='start' value={this.state.value} onChange={this.handleChange} placeholder={'Name of event?'} required/>
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
