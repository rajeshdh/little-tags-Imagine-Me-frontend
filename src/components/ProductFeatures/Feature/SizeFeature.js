export default function SizeFeature({ value, clickable, selected }) {
    return <button
        onClick={clickable ? () => clickable("size") : null}
        tabIndex={clickable ? '1' : '-1'}
        className={`focus:outline-none border border-gray-400 mr-2 py-1 px-2 text-sm rounded ${clickable ? 'hover:text-white hover:border-0 hover:bg-sp-btn-primary' : ''} ${selected ? 'bg-sp-btn-primary text-white': 'text-gray-500'}`}
    >
        {value}
    </button>
}