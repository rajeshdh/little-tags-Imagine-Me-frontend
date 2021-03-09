export default function SizeFeature({ value, clickable }) {
  return (
    <button
      tabIndex={clickable ? '1' : '-1'}
      className={`border border-gray-400 mr-2 p-1 text-sm text-gray-500 rounded ${
        clickable
          ? 'hover:text-white hover:border-0 hover:bg-sp-btn-primary'
          : ''
      }`}
    >
      {value}
    </button>
  );
}
