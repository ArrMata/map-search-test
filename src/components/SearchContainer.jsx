import { useDispatch, useSelector } from "react-redux"
import { updateSearch } from "../appstate/slices/SearchSlice";

function SearchContainer() {
	const searchInput = useSelector(state => state.search.value);
	const dispatch = useDispatch();

	return (
		<div className="flex items-center shadow-lg">
			<div className="rounded-tl-sm py-4 ps-4 pe-2 bg-white">
				<img src="/icon-search.svg" alt="Search Icon" className="aspect-square w-5" />
			</div>
			<div className="rounded-tr-sm p-3 bg-white">
				<input className="text-xl w-80 text-black bg-white focus:outline-none"
					onChange={(e) => dispatch(updateSearch(e.target.value))}
					value={searchInput} type="text" placeholder="Search..." />
			</div>
		</div>
	)
}
export default SearchContainer