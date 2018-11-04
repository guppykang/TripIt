import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, Polyline, InfoWindow } from 'react-google-maps';

class Map extends Component {
  constructor(props){
    super(props);
    this.state= {
      isOpen: false,
      event: null}

    this.onToggleOpen = this.onToggleOpen.bind(this);
}

onToggleOpen(event){
  this.setState({
    isOpen: !this.state.isOpen,
    event: event
  })
}

  render() {

    const BasicMap = withScriptjs(withGoogleMap(props => (    
      <GoogleMap
        ref={props.onMapLoad}
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
        {props.events.map(event => (
          <Marker
            key={event.key}
            position={{ lat: event.lat, lng: event.lng }}
            onClick={() => this.onToggleOpen(event)}
          >
            {props.isOpen && props.currentEvent.key == event.key && 
            <InfoWindow onCloseClick={props.onClick}>
              <p>{props.currentEvent.key}</p>
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
                    {key: "Event2", lat: 40.75, lng: -73.98} ]}
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