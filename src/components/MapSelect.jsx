function MapSelect() {
	return (
		<div className="form-control w-full max-w-lg">
			<label className="label">
				<span class="label-text text-white font-semibold w-full py-2 rounded-md text-center bg-blue-700">Map Selection</span>
			</label>
			<select class="select select-bordered bg-white text-black">
				<option disabled selected>Who shot first?</option>
				<option>Han Solo</option>
				<option>Greedo</option>
			</select>
		</div>
	)
}
export default MapSelect