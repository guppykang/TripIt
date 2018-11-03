import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox'

const BasicSearchBox = withScriptjs(props => (
    <div data-standalone-searchbox="">
        <StandaloneSearchBox
            onPlacesChanged={props.onPlacesChanged}
        >
            <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                }}
            />
        </StandaloneSearchBox>
        <ol>
            {props.places.map(({geometry: {location}}) => 
                <li>
                    ({location.lat()}, {location.lng()})
                </li>
            )}
        </ol>
    </div>
));

class SearchBox extends Component{
    constructor(props){
        super(props);
        this.state= {places: []}
    }
    onPlacesChanged(){
        const _places = this.refs.BasicSearchBox.getPlaces();
        alert(_places);
        this.setState({
            places: _places
        });
    }
    render(){
        return(
            <div>
                <BasicSearchBox
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC6lITdtZyuDWThjmOv6VjdsfLPAtg6GDA&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    onPlacesChanged={this.onPlacesChanged}
                    places={this.state.places}
                />
            </div>
        );
    }
}

export default SearchBox;