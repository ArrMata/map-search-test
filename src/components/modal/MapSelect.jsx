import { useDispatch, useSelector } from "react-redux";
import { selectMap } from "../../appstate/slices/ActiveMapSlice";

// Component that allows for selecting between Open Street Map and Google Maps. 
// OpenStreetMap available in order to have a map layer that does not have Google Maps watermark for missing API key
// DaisyUI Select Component used in order for a quick and pretty component, but easy customization to match colors of design.
function MapSelect() {
	const mapSelection = useSelector((state) => state.activeMap.value);
	const dispatch = useDispatch();

	return (
		<div className="form-control w-full max-w-lg">
			<label className="label">
				<span className="label-text text-white font-semibold w-full py-2 rounded-md text-center bg-blue-700">
					Map Selection
				</span>
			</label>
			<select
				value={mapSelection}
				onChange={(e) => dispatch(selectMap(e.target.value))}
				className="select select-bordered bg-white text-black"
			>
				<option value={"OpenStreetMap"}>Open Street Map</option>
				<option value={"GoogleMaps"}>Google Maps</option>
			</select>
		</div>
	);
}
export default MapSelect;
