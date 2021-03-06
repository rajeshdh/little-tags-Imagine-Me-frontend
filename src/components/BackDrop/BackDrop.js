export default function BackDrop({ show, onClick, children }) {
    return <div className={`fixed inset-0 bg-gray-400 z-30 bg-opacity-60 transition delay-400 ease-out ${show ? 'opacity-1 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0" onClick={onClick} ></div>
        {children}
    </div>
}