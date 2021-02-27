import { FormattedMessage } from 'react-intl'

export default function MainCarouselCard({ title, description, image }) {
    console.log(image);
    return <div className="flex h-full relative">
        <div className="absolute inset-0 p-3 flex items-center lg:justify-center lg:relative lg:w-2/4 lg:p-0">
            <div className="w-9/12 md:w-2/4">
                <div className="text-gray-500 text-xl">
                    <FormattedMessage id={title} />
                </div>
                <div className="text-5xl mt-5 lg:text-6xl">
                    <FormattedMessage id={description} />
                </div>
            </div>
        </div>
        <div className="w-full bg-top bg-cover bg-no-repeat lg:w-2/4" style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/${image})` }}>

        </div>
    </div>
}