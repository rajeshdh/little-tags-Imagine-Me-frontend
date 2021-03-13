export default function ErrorMessage({ children }) {
    return <div className="flex mt-48 justify-center text-xl md:text-5xl capitalize text-gray-500 items-center w-full">
        {children}
    </div>
}