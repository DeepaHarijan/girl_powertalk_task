import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

const markers = [
    {
      id: 1,
      name: "Canada, Canada",
      position: { lat: 43.651070, lng: -79.347015 }
    },
    {
      id: 2,
      name: "Srilanka, Srilanka",
      position: { lat: 6.927079, lng: 79.861244 }
    },
    {
      id: 3,
      name: "India, India",
      position: { lat: 34.052235, lng: -118.243683 }
    },
    {
      id: 4,
      name: "New York, New York",
      position: { lat: 40.712776, lng: -74.005974 }
    }
  ];


function Map() {
    const google = window.google
    const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };



  return (
    <>
    <h1 className="heading" style={{"margin-top":"10%"}}>Where Our Young leaders come from</h1>
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
    </>
  )
}

export default Map