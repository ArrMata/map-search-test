import { Bar } from "react-chartjs-2";
import {
	CategoryScale,
	Chart,
	LinearScale,
	BarElement,
	Tooltip,
	Title,
} from "chart.js";


// Store Traffic Graph using Chart.JS and React-ChartJS-2 react library.
// Creates a vertical bar graph representing the average store traffic when passed data through data prop.
function StoreTrafficGraph({ data }) {
	Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);
	const labels = Object.keys(data).map(
		(day) => day.charAt(0).toUpperCase() + day.slice(1)
	);
	const datasets = [
		{
			data: Object.values(data),
			backgroundColor: "rgb(29, 78, 216)",
		},
	];

	const chartOptions = {
		plugins: {
			title: {
				display: true,
				text: "Average Store Traffic",
			},
		},
	};

	return (
		<Bar className="mt-8" options={chartOptions} data={{ labels, datasets }} />
	);
}
export default StoreTrafficGraph;
