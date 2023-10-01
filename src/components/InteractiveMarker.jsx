import { Marker, useMap } from "react-leaflet"
import { customMarkerIcon } from "./CustomMarkerIcon";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function InteractiveMarker() {
	const location = useSelector(state => state.activeResult.value);
	const map = useMap();

	useEffect(() => {
		if (location.location) {
			map.panTo([location.location.lat, location.location.lon])
		}
	}, [map, location])

	return (
		<>
			{location.location ?
				<Marker eventHandlers={{ click: () => console.log('test') }} position={[location.location.lat, location.location.lon]} icon={customMarkerIcon} />
				: <></>}
		</>
	)
}
export default InteractiveMarker