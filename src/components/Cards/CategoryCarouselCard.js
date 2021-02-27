
export default function CategoryCarouselCard({ title, image }) {
    return <div className="relative rounded-full bg-center bg-contain bg-no-repeat shadow-md w-24 h-24 mr-5 sm:rounded sm:w-48 sm:h-56 sm:bg-cover transform hover:scale-110 my-4" 
    style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/${image})` }} >
        <div className="absolute bottom-5 text-center left-0 right-0 hidden sm:block">
            {title}
        </div>
    </div>
}