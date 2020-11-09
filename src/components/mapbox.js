import React, { Component } from "react";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Header from "./Header";

const markerList = [
  { id: 1, lat: 13.035781, long: 77.597008, name: "Hebbal", info: 10 },
  { id: 2, lat: 12.917137, long: 77.622791, name: "Silk Board", info: 20 },
  { id: 3, lat: 12.9727, long: 77.5702, name: "Magestic", info: 10 },
  { id: 4, lat: 12.997121, long: 77.669232, name: "Tin Factory", info: 20 },
  { id: 5, lat: 13.067439, long: 80.237617, name: "Chennai" },
  { id: 6, lat: 12.311827, long: 76.652985, name: "Mysore" },
  { id: 7, lat: 15.496777, long: 73.827827, name: "Goa" },
  { id: 8, lat: 8.520929, long: 76.9412, name: "Thiruvananthapuram" },
  { id: 9, lat: 19.07609, long: 72.877426, name: "Mumbai" },
  { id: 10, lat: 17.690474, long: 83.231049, name: "Vizag" },
  { id: 11, lat: 17.50001, long: 78.401527, name: "Hyderabad" },
];

let token =
  "pk.eyJ1IjoiaGVtYW50aGt1bWFyMzQyIiwiYSI6ImNraDV2cW4zejA4OG4zMXVpcmtieGQ1MTEifQ.LVoj27Bq-vV73NOulmEP9Q";

export default class Mapbox extends Component {
  state = {
    viewport: {
      latitude: 12.972442,
      longitude: 77.580643,
      zoom: 15,
      bearing: 0,
      pitch: 0,
      width: "100%",
      height: 1000,
    },
    selectMarker: false,
    selected: [],
  };

  selectedMarker = async (e, item) => {
    e.preventDefault();

    await this.setState({ selectMarker: true, selected: item });
  };

  render() {
    const { viewport } = this.state;
    return (
      <div>
        <Header />

        <MapGL
          {...viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapStyle="mapbox://styles/mapbox/streets-v10"
          mapboxApiAccessToken={token}
        >
          {markerList.map((item) => (
            <Marker key={item.id} latitude={item.lat} longitude={item.long}>
              <button
                onClick={(e) => {
                  this.selectedMarker(e, item);
                }}
                style={{ color: "Red" }}
              >
                <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
              </button>
            </Marker>
          ))}

          {this.state.selectMarker ? (
            <Popup
              latitude={this.state.selected.lat}
              longitude={this.state.selected.long}
              onClose={() => {
                this.setState({ selectMarker: false });
              }}
            >
              <div>{this.state.selected.name}</div>
            </Popup>
          ) : null}

          <div
            className="nav"
            style={{ position: "absolute", top: 0, left: 0, padding: "10px" }}
          >
            <NavigationControl
              onViewportChange={(viewport) => this.setState({ viewport })}
            />
          </div>
        </MapGL>
      </div>
    );
  }
}
