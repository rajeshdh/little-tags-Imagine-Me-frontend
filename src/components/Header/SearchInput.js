import SearchIcon from '../../IconSet/SearchIcon';

export default function SearchInput(props) {
  return (
    <div className="bg-white flex items-center rounded-md shadow-xl animate-bottom-top">
      <input
        className="rounded-l-md w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
        {...props}
      />

      <div className="p-1">
        <button className="bg-sp-btn-primary hover:bg-sp-btn-primary-dark text-white rounded-md p-2 focus:outline-none w-10 h-10 flex items-center justify-center">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
