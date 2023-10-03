import { Icon } from "leaflet"
import '../../App.css'

// Custom Leaflet Icon class instance used for marker on map.
export const customMarkerIcon = new Icon({
	iconUrl: '/icon-pin.svg',
	iconSize: [25, 50],
})