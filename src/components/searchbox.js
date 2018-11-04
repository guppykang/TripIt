import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox'



class SearchBox extends Component{
    constructor(props){
        super(props);
        this.state= {places: []}

        this.onPlacesChanged = this.onPlacesChanged.bind(this);
        this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
    }

    handleSearchBoxMounted(searchBox){
        this._searchBox = searchBox
    }

    onPlacesChanged(){
        var newPlace = this.state.places.slice();

        newPlace.push(this._searchBox.getPlaces()[0]);

        console.log(newPlace);

        this.setState({
            places: newPlace
        })
        console.log("RIGHT HERE");
        console.log(this.state.places);
        // const _places = this._searchBox.getPlaces();

        // console.log(_places)

        // this.setState({
        //     places: _places
        // });
    }
    render(){

        const BasicSearchBox = withScriptjs(props => (
            <div data-standalone-searchbox="">
                <StandaloneSearchBox
                    ref={props.onSearchBoxMounted}
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
                    {props.places.map((place) =>
                        <li>
                            {/* {place.geometry} */}
                            ({place.geometry.location.lat()}, {place.geometry.location.lng()})
                        </li>
                    )}
                </ol>
            </div>
        ));

        return(
            <div>
                <BasicSearchBox
                    onSearchBoxMounted={this.handleSearchBoxMounted}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC6lITdtZyuDWThjmOv6VjdsfLPAtg6GDA&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    onPlacesChanged={this.onPlacesChanged}
                    places={this.state.places}
                />
            </div>
        );
    }
};

export default SearchBox;