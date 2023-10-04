import { useSelector } from "react-redux";
import StoreTrafficGraph from "./StoreTrafficGraph";

// Details Modal reading the activeLocation from the ReduxStore.
// Conditionally renders Website Link, Description, Average Store Traffic, and Images if provided.
// DaisyUI Modal Tailwind Component used for built-in modal functionality but easy easy customizability in order to match design images.
function DetailsModal() {
	const activeLocation = useSelector((state) => state.activeResult.value);
	return (
		<dialog id="locationDetailsModal" className="modal bg-black bg-opacity-60">
			{activeLocation.name ? (
				<>
					<div className="modal-box max-w-lg bg-white rounded-md p-3">
						<div className="flex items-center">
							<img
								src="/icon-pin.svg"
								alt="Location Pin"
								className="w-10 h-10 me-4"
							/>
							<div>
								<h3 className="font-semibold text-2xl text-gray-900">
									{activeLocation.name}
								</h3>
								<div className="flex">
									<p className="text-gray-400 font-semibold text-md me-2">
										{activeLocation.location.lat}
									</p>
									<p className="text-gray-400 font-semibold text-md">
										{activeLocation.location.lon}
									</p>
								</div>
							</div>
							{activeLocation.details?.website ? (
								<button className="ms-auto bg-blue-700 text-white font-semibold py-3 px-8 rounded-md">
									<a href={activeLocation.details.website}>Visit Website</a>
								</button>
							) : null}
						</div>
						<div>
							{activeLocation.details?.description ? (
								<p className="text-black px-1 mt-6">
									{activeLocation.details.description}
								</p>
							) : null}
							{activeLocation.images ? (
								<div className="grid grid-cols-3 gap-2 justify-center px-1 mt-6">
									{activeLocation.images.map((imageUrl) => (
										<img
											className="rounded-sm"
											src={imageUrl}
											key={imageUrl}
											onError={(e) =>
												(e.target.src = `https://placehold.co/500/7f1d1d/white/?text=Broken+Image`)
											}
											alt="Location Pictures"
										/>
									))}
								</div>
							) : null}
							{activeLocation.details?.avgStoreTraffic ? (
								<StoreTrafficGraph
									data={activeLocation.details.avgStoreTraffic}
								/>
							) : null}
						</div>
					</div>
					<form method="dialog" className="modal-backdrop justify-end p-5">
						<button className="w-12 h-12">
							<img src="/x.svg" alt="Close Button" className="w-full h-full" />
						</button>
					</form>
				</>
			) : null}
		</dialog>
	);
}
export default DetailsModal;
