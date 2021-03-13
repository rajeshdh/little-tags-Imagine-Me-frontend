export default function ColorFeature({ color, clickable, selected }) {
    return <button tabIndex={clickable ? '1' : '-1'}
        onClick={clickable ? ()=>clickable("color") : null}
        className={`focus:outline-none rounded-full mr-2 transform delay-200 ${clickable ? 'w-7 h-7 hover:scale-105' : 'w-5 h-5'} ${selected ? 'border-4 border-yellow-400' : ''}`}
        style={{ backgroundColor: `${color}` }} >
    </button>
}