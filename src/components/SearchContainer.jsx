function SearchContainer() {
	return (
		<div className="absolute z-10 left-16 top-3 flex items-center shadow-xl">
			<div className="rounded-tl-sm py-4 ps-4 pe-2 bg-white ">
				<img src="/icon-search.svg" alt="Search Icon" className="aspect-square w-5" />
			</div>
			<div className="rounded-tr-sm p-3 bg-white">
				<input className="text-xl w-80" type="text" placeholder="Search..." />
			</div>
		</div>
	)
}
export default SearchContainer