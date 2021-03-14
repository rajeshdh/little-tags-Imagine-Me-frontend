export default function ColorFeature({ color, clickable, selected, small }) {
    return <button tabIndex={clickable ? '1' : '-1'}
        onClick={clickable ? () => clickable("color") : null}
        className={`focus:outline-none rounded-full mr-2 transform delay-200 ${small ? 'w-6 h-6' : 'w-10 h-10'} ${clickable ? 'hover:scale-105' : 'cursor-default'} ${selected ? 'border-4 border-yellow-400' : ''}`}
        style={{ backgroundColor: `${color}` }} >
    </button>
}