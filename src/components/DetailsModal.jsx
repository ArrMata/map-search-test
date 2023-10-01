import { useSelector } from "react-redux"

function DetailsModal() {
	const activeLocation = useSelector(state => state.activeResult.value);

	return (
		<dialog id="my_modal_1" className="modal">
			<div className="modal-box max-w-lg bg-white rounded-md p-3">
				<div className="flex items-center">
					<img src="/icon-pin.svg" alt="Location Pin" className="w-10 h-10 me-4" />
					<div>
						<h3 className="font-semibold text-2xl text-gray-900">{activeLocation.name}</h3>
						<div className="flex">
							<p className="text-gray-400 font-semibold text-md me-2">{activeLocation.location.lat}</p>
							<p className="text-gray-400 font-semibold text-md">{activeLocation.location.lon}</p>
						</div>
					</div>
					{activeLocation.details?.website && <button className="ms-auto bg-blue-700 text-white font-semibold py-3 px-8 rounded-md"><a>Visit Website</a></button>}
				</div>
			</div>
			<form method="dialog" className="modal-backdrop justify-end p-5">
				<button className="w-12 h-12">
					<img src="/x.svg" alt="Close Button" className="w-full h-full" />
				</button>
			</form>
		</dialog>
	)
}
export default DetailsModal