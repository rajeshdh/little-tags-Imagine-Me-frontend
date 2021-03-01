import SearchIcon from "../../IconSet/SearchIcon";

export default function SearchInput() {
    return <div className="bg-white flex items-center rounded-full shadow-xl animate-bottom-top">
        <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Search" />

        <div className="p-1">
            <button className="bg-sp-btn-primary hover:bg-sp-btn-primary-dark text-white rounded-full p-2 focus:outline-none w-10 h-10 flex items-center justify-center">
                <SearchIcon />
            </button>
        </div>
    </div>
}