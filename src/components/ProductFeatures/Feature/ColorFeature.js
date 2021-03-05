export default function ColorFeature({ color, clickable }) {
    return <button tabIndex={clickable ? '1' : '-1'} className={`rounded-full mr-2 transform delay-200 ${clickable ? 'w-10 h-10 hover:scale-105' : 'w-5 h-5'}`} style={{ backgroundColor: `${color}` }} ></button>
}