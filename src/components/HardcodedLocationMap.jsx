import GoogleMapReact from 'google-map-react';
import { configKeys } from "../../env.google-maps";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HardcodedLocationMap = () => {
  const location = { latitude: -33.141354, longitude: -70.725316 }

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

export default HardcodedLocationMap;
