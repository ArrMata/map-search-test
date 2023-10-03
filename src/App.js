import { MapContainer, TileLayer } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import SearchContainer from './components/SearchContainer';
import ResultsList from './components/ResultsList';
import InteractiveMarker from './components/InteractiveMarker';
import DetailsModal from './components/DetailsModal';
import { useState } from 'react';
import MapSelect from './components/MapSelect';
function App() {

  const center = [-34.397, 150.644];
  const [map, setMap] = useState()

  return (
    <div className='w-screen h-screen relative'>
      {map ?
        <>
          <div className='absolute z-10 left-16 top-3'>
            <SearchContainer />
            <ResultsList map={map} />
          </div>
          <div className='absolute z-10 left-4 bottom-3 shadow-lg'>
            <MapSelect />
          </div>
        </>
        : null
      }
      <MapContainer className='absolute w-full h-full z-0'
        zoom={9}
        center={center}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <ReactLeafletGoogleLayer /> */}
        <InteractiveMarker />
      </MapContainer>
      <DetailsModal />
    </div>
  );
}

export default App;
