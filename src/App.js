import { MapContainer, Marker } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import { customMarkerIcon } from './components/CustomMarkerIcon';
import SearchContainer from './components/SearchContainer';
function App() {

  const center = [-34.397, 150.644];

  return (
    <div className='w-screen h-screen relative'>
      <SearchContainer />
      <MapContainer className='w-full h-full z-0'
        zoom={9}
        center={center}
        scrollWheelZoom={false}
      >
        <ReactLeafletGoogleLayer />
        {/* <Marker position={center} icon={customMarkerIcon}>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default App;
