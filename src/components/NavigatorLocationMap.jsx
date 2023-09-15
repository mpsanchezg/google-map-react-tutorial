import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { configKeys } from "../../env.google-maps";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const NavigatorLocationMap = () => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    setIsLoading(false);
  }

  function error() {
    console.log("Unable to retrieve your location");
    setIsLoading(false);
    setIsError(true);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{"ERROR :("}</div>;
  }

  if (location) {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: configKeys.GOOGLE_MAPS_API_KEY }}
          defaultCenter={{ lat: location.latitude, lng: location.longitude }}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={location.latitude}
            lng={location.longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }

  return null; // Renderiza nulo si la ubicación aún no se ha recuperado
}

export default NavigatorLocationMap;
