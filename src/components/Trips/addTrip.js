import Popup from 'reactjs-popup';
import React, { Component } from 'react';
import './addTrip.css';

import SearchBox from '../searchbox';

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
    alert('From: ' + this.state.start + 'To: ' + this.state.dest);
    e.preventDefault();
  }
  handleSearchChange(fieldId, value){
    this.setState({
      [fieldId]: value
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
                onPlacesChanged={this.handleSearchChange}/>
                <input type='submit' value='Create' />
              </form>
            </div>
          </div>

        )}
      </Popup>
    );
  }
}

export default AddTrip;
