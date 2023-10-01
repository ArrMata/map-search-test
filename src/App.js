import { MapContainer } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import SearchContainer from './components/SearchContainer';
import ResultsList from './components/ResultsList';
import InteractiveMarker from './components/InteractiveMarker';
import DetailsModal from './components/DetailsModal';
function App() {

  const center = [-34.397, 150.644];

  return (
    <div className='w-screen h-screen relative'>
      <div className='absolute z-10 left-16 top-3'>
        <SearchContainer />
        <ResultsList />
      </div>
      <MapContainer className='w-full h-full z-0'
        zoom={9}
        center={center}
      >
        <ReactLeafletGoogleLayer />
        <InteractiveMarker />
      </MapContainer>
      <DetailsModal />
    </div>
  );
}

export default App;
