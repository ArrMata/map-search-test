import { Marker } from "react-leaflet";
import { customMarkerIcon } from "./CustomMarkerIcon";
import { useSelector } from "react-redux";

// Marker Icon that appears on map when a location is selected from the results list and opens details modal.
function InteractiveMarker() {
	const location = useSelector((state) => state.activeResult.value);

	return (
		<>
			{location.location ? (
				<Marker
					eventHandlers={{
						click: () =>
							document.getElementById("locationDetailsModal").showModal(),
					}}
					position={[location.location.lat, location.location.lon]}
					icon={customMarkerIcon}
				/>
			) : null}
		</>
	);
}
export default InteractiveMarker;
