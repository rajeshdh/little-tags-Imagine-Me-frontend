import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

export default function CategoryCarouselCard({ title, image }) {
    return <Link to={`/category/${title}`}>
        <div className="relative rounded-full bg-center bg-contain bg-no-repeat shadow-md w-16 h-16 mr-5 sm:rounded sm:w-48 sm:h-56 sm:bg-cover delay-200 transition-all transform hover:scale-110 my-4"
            style={{ backgroundImage: `url(${image})` }} >
            <div className="absolute bottom-5 text-center left-0 right-0 hidden sm:block">
                <FormattedMessage id={title} />
            </div>
        </div>
    </Link>
}