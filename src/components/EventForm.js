import React from 'react'
import { Link } from 'gatsby'

class EventForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '', 
          cost: '', 
          modeOfTransportation: '', 
          description: ''
        };
  
      this.handleChangeDestinationName = this.handleChangeDestinationName.bind(this);
      this.handleChangeCost = this.handleChangeCost.bind(this);
      this.handleChangeModeOfTransportation = this.handleChangeModeOfTransportation.bind(this);
      this.handleChangeDescription = this.handleChangeDescription.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeDestinationName(event) {
      this.setState({name: event.target.value});
    }
  
    handleChangeCost(event) {
        this.setState({cost: event.target.value});
    }

    handleChangeModeOfTransportation(event) {
        this.setState({modeOfTransportation: event.target.value});
    }

    handleChangeDescription(event) {
        this.setState({description: event.target.value});
    }

    handleSubmit(event) {
        //send this to fauna
      alert('A name was submitted: ' + this.state.name);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Enter in Event Details</h1>
          <label>Destination Name:</label>
          <input type="text" name="name" onChange={this.handleChangeDestinationName}/>
          <label>Cost:</label>
          <input type="text" name="cost" onChange={this.handleChangeCost}/>
          <label>Mode of Transportation:</label>
          <input type="text" name="name" onChange={this.handleChangeModeOfTransportation}/>
          <label>Description:</label>
          <input type="text" name="name" onChange={this.handleChangeDescription}/>
          <input type="submit" value="Submit"/>
          <Link to="/">Cancel</Link>
        </form>
      );
    }
  }

  export default EventForm