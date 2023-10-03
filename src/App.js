import { MapContainer, TileLayer } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import SearchInput from "./components/search/SearchInput";
import ResultsList from "./components/search/ResultsList";
import InteractiveMarker from "./components/leaflet/InteractiveMarker";
import DetailsModal from "./components/modal/DetailsModal";
import MapSelect from "./components/modal/MapSelect";
import { useState } from "react";
import { useSelector } from "react-redux";

// Root of React App. 
// Extracts the map state from MapContainer in order to pass it to components that are siblings of MapContainer and not children.
function App() {
  const center = [42.36, -71.05];
  const [map, setMap] = useState();
  const mapSelection = useSelector((state) => state.activeMap.value);

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute z-10 left-16 top-3">
        <SearchInput />
        <ResultsList map={map} />
      </div>
      <div className="absolute z-10 left-4 bottom-3 shadow-lg">
        <MapSelect />
      </div>
      <MapContainer
        className="absolute w-full h-full z-0"
        zoom={9}
        center={center}
        ref={setMap}
      >
        {mapSelection === "OpenStreetMap" ? (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        ) : (
          // Used ReactLeafletGoogleLayer library in order to implement GoogleMaps as a TileLayer
          // For Development Purposes only watermark removed with proper Api Key provided.
          <ReactLeafletGoogleLayer />
        )}
        <InteractiveMarker />
      </MapContainer>
      <DetailsModal />
    </div>
  );
}

export default App;
