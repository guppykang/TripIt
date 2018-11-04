import React, { Component } from 'react';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox'



class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { places: [] }

        this.onPlacesChanged = this.onPlacesChanged.bind(this);
        this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
    }

    handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox
    }

    onPlacesChanged() {
        var newPlace = this._searchBox.getPlaces()[0];
        this.props.onPlacesChanged(this.props.id, newPlace);
        this.setState({
            places: newPlace
        })
    }
    render() {

        const BasicSearchBox = withScriptjs(props => (
            <div data-standalone-searchbox="">
                <StandaloneSearchBox
                    ref={props.onSearchBoxMounted}
                    onPlacesChanged={props.onPlacesChanged}
                >
                    <input
                        type="text"
                        placeholder={props.prompt}
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
                <ul>
                    <li>
                        {props.places.name}
                    </li>
                </ul>
            </div>
        ));

        return (
            <div>
                <BasicSearchBox
                    onSearchBoxMounted={this.handleSearchBoxMounted}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC6lITdtZyuDWThjmOv6VjdsfLPAtg6GDA&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    onPlacesChanged={this.onPlacesChanged}
                    places={this.state.places}
                    prompt={this.props.prompt}
                />
            </div>
        );
    }
};

export default SearchBox;
