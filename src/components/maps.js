import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, Polyline } from 'react-google-maps';

const BasicMap = withScriptjs(withGoogleMap(props => (    
  <GoogleMap
    ref={props.onMapLoad}
    defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
    defaultZoom = { 13 }
  >
    {props.markers.map(marker => (
      <Marker
        position={{ lat: marker.lat, lng: marker.lng }}
      />
    ))}
    <Polyline
      path={props.markers}
    />
  </GoogleMap>
)));



class Map extends Component {
  render() {
    return(
      <div>
        <BasicMap
          markers={ [{lat: 40.756795, lng: -73.954298},
                    {lat: 40.75, lng: -73.98} ]}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC6lITdtZyuDWThjmOv6VjdsfLPAtg6GDA&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
  );
  }
};

export default Map;