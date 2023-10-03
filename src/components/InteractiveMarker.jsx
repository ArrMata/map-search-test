import { Marker } from "react-leaflet"
import { customMarkerIcon } from "./CustomMarkerIcon";
import { useSelector } from "react-redux";

function InteractiveMarker() {
	const location = useSelector(state => state.activeResult.value);

	return (
		<>
			{location.location ?
				<Marker eventHandlers={{ click: () => document.getElementById('locationDetailsModal').showModal() }} position={[location.location.lat, location.location.lon]} icon={customMarkerIcon} />
				: <></>}
		</>
	)
}
export default InteractiveMarker