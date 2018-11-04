import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, Polyline, InfoWindow } from 'react-google-maps';
import fire from '../components/fire'


class Map extends Component {
  constructor(props){
    super(props);
    this.state= {
      isOpen: false,
      event: null,
      markers: []
      }
    this.onToggleOpen = this.onToggleOpen.bind(this);
}

onToggleOpen(event){
  this.setState({
    isOpen: !this.state.isOpen,
    event: event
  })
}

componentDidMount(){
  let cur = this;
  fire.database().ref('Trip').once('value', function (snapshot) {
    let events = snapshot.val();
    let newMarkers = [];
    for(let event in events){
      newMarkers.push({name: events[event].start, lat: events[event].lat, lng: events[event].lng});
    }
    cur.setState({
      markers: newMarkers
    });
  });
}

  render() {
    const BasicMap = withScriptjs(withGoogleMap(props => (    
      <GoogleMap
        defaultCenter = { {  lat: 40.756795, lng: -73.954298  } }
        defaultZoom = { 13 }
      >
        {props.events.map(event => (
          <Marker
            name={event.name}
            position={{ lat: event.lat, lng: event.lng }}
            onClick={() => this.onToggleOpen(event)}
          >
            {props.isOpen && props.currentEvent.name == event.name && 
            <InfoWindow onCloseClick={props.onClick}>
              <p>{props.currentEvent.name}</p>
            </InfoWindow>}
          </Marker>
        ))}
        <Polyline
          path={props.events}
        />
      </GoogleMap>
    )));

    return(
      <div>
        <BasicMap
          events={ [{key: "Event1", lat: 40.756795, lng: -73.954298},
          {key: "Event2", lat: 40.75, lng: -73.98},
          {key: "Event3", lat: 40.76, lng: -73.98},
          {key: "Event4", lat: 40.77, lng: -73.99},
          {key: "Event5", lat: 40.772, lng: -73.97},
          {key: "Event6", lat: 40.74, lng: -73.95},
          {key: "Event3", lat: 40.78, lng: -73.92} ]}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC6lITdtZyuDWThjmOv6VjdsfLPAtg6GDA&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          onClick={this.onToggleOpen}
          isOpen={this.state.isOpen}
          currentEvent={this.state.event}
        />
      </div>
  );
  }
};

export default Map;